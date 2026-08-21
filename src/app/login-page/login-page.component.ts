import { AccountService } from './../@services/account.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { flush } from '@angular/core/testing';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private accountService : AccountService,private router:Router){}


  account !: string;
  password !: string;
  showPassword : boolean = false;
  permissions !: string;


  Login(){
    if(this.account && this.password){
      let dataAccount = this.accountService.account.find((item) =>
        item.account === this.account
      )
      if(!dataAccount){
        alert("此帳號未註冊");
      }
      else{
        if(this.password === dataAccount.password){
          this.permissions = dataAccount.permissions;
          this.changePage();
        }
        else{
          alert("帳號或密碼錯誤");
        }
      }
    }
    else{
      alert("帳號/密碼不能為空");
    }
  }

  changePage(){
    console.log(this.permissions);
    if(this.permissions == 'admin'){
     this.router.navigate(['/admin-index-page'])
    }
  }


}
