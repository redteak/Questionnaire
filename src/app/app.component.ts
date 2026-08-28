import { Component, inject, input } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AccountService } from './@services/account.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  accountService = inject(AccountService);
  fb = inject(FormBuilder);
  router = inject(Router);


  isLogin = this.accountService.isLogin;
  isAdmin = this.accountService.isAdmin;


  ngOnInit(): void {
    for (let surveyData of this.accountService.fakeSurveyData) {
      const surveyGroup = this.fb.group({
        id: [surveyData.id, Validators.required],
        surveyTitle: [surveyData.surveyTitle, Validators.required],
        icon:[surveyData.icon,Validators.required],
        suveryIntroduce: [surveyData.suveryIntroduce, Validators.required],
        startTime: [surveyData.startTime, Validators.required],
        endTime: [surveyData.endTime, Validators.required],
        questions: surveyData.questions,
        answerTime: [surveyData.answerTime, Validators.required],
        surveyCreator: [surveyData.surveyCreator, Validators.required]
      })
      this.accountService.surveyList.push(surveyGroup);

    }

  }

  check() {
    console.log(this.isAdmin);

  }
  logout() {
    let answer = confirm("確認要登出嗎?");
    if (answer) {
      this.accountService.changePermissions("");
      this.router.navigate(['/home']);
    }
  }
}
