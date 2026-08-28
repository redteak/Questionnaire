import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AccountService } from '../@services/account.service';
import { FormArray, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-questionnaire-list-component',
  imports: [RouterLink , FormsModule],
  templateUrl: './questionnaire-list-component.component.html',
  styleUrl: './questionnaire-list-component.component.scss'
})
export class QuestionnaireListComponentComponent {
  accountService = inject(AccountService);
  router = inject(Router);
  suverylist = this.accountService.surveyList;



  questionArray(index: number): FormArray {
    return this.accountService.surveyList.at(index).get('questions') as FormArray;
  }

  getSurveyStatus(survey: any): string {

    const now = new Date();
    const start = new Date(survey.get('startTime').value);
    const end = new Date(survey.get('endTime').value);

    if (now < start) {
      return '尚未開始';
    }

    if (now > end) {
      return '已結束';
    }
    return '進行中';
  }

  showDatePicker = false;
  pageSize: number = 6;
  currentPage: number = 1;
  startDate: string = '';
  endDate: string = '';

  get filteredSurveys() {
    return this.accountService.surveyList.controls.filter(survey => {
      const surveyStart = survey.value.startTime;
      const surveyEnd = survey.value.endTime;
      if (this.startDate && surveyEnd < this.startDate) {
        return false;
      }
      if (this.endDate && surveyStart > this.endDate) {
        return false;
      }
      return true;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.filteredSurveys.length / this.pageSize);
  }

  get currentSurveys() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredSurveys.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
