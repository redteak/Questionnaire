import { AccountService } from './../@services/account.service';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  accountService = inject(AccountService);
  router = inject(Router);
  showPassword: boolean = false;
  nowTime: number = new Date().getTime();

  fb = inject(FormBuilder);
  loginform = this.fb.group({
    question: this.fb.array([])
  });

  get questionArray(): FormArray {
    return this.loginform.get('question') as FormArray;
  }


  ngOnInit(): void {
    const loginFormGroup = this.fb.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
      rememberAccount: [false]
    })
    this.questionArray.push(loginFormGroup);

    if (localStorage.getItem('rememberAccount') === 'true') {
      let tokenAccount = this.accountService.token.find((item) => {
        return item.token === localStorage.getItem('token');
      })
      if (tokenAccount) {
        if (this.nowTime - tokenAccount.timedata < 60000) {
          this.questionArray.get('rememberAccount')?.setValue(localStorage.getItem('rememberAccount'));
          this.questionArray.at(0).get('account')?.setValue(tokenAccount.account);
          this.questionArray.at(0).get('password')?.setValue(tokenAccount.password);
          this.questionArray.at(0).get('rememberAccount')?.setValue(localStorage.getItem('rememberAccount'));
        }
        else {
          alert('登入憑證已過期,請重新登入');
          this.questionArray.at(0).get('rememberAccount')?.setValue(localStorage.getItem('rememberAccount'));

        }
      }
    }
  }

  Login() {
    if (!this.loginform.invalid) {
      let dataAccount = this.accountService.account.find((item) =>
        item.account === this.questionArray.value[0].account
      )
      if (!dataAccount) {
        alert("此帳號未註冊");
      }
      else {
        if (this.questionArray.value[0].password === dataAccount.password) {
          let loginTimeData: Date = new Date();
          let token: string = crypto.randomUUID();
          this.accountService.tokenData = token;
          localStorage.setItem('token', token);
          localStorage.setItem('rememberAccount', String(this.questionArray.value[0].rememberAccount));

          this.accountService.token.push({
            account: this.questionArray.value[0].account,
            password: this.questionArray.value[0].password,
            permissions: dataAccount.permissions,
            timedata: loginTimeData.getTime(),
            token: token,
          })

          this.changePage(dataAccount.permissions);
        }
        else {
          alert("帳號或密碼錯誤");
        }
      }
    }
    else {
      alert("帳號/密碼不能為空");
    }
  }

  changePage(data: string) {
    if (data == 'admin') {
      this.accountService.changePermissions(data);
      this.router.navigate(['/admin-index-page'])
    }
    else if (data == 'user') {
      this.accountService.changePermissions(data);
      this.router.navigate(['/user-index-page'])
    }
  }


}
