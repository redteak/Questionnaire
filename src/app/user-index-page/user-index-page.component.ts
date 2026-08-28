import { Component } from '@angular/core';
import { QuestionnaireListComponentComponent } from '../questionnaire-list-component/questionnaire-list-component.component';

@Component({
  selector: 'app-user-index-page',
  imports: [QuestionnaireListComponentComponent],
  templateUrl: './user-index-page.component.html',
  styleUrl: './user-index-page.component.css'
})
export class UserIndexPageComponent {

}
