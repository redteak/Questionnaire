import { Component } from '@angular/core';
import { QuestionnaireListComponentComponent } from "../questionnaire-list-component/questionnaire-list-component.component";

@Component({
  selector: 'app-admin-index-page',
  imports: [QuestionnaireListComponentComponent],
  templateUrl: './admin-index-page.component.html',
  styleUrl: './admin-index-page.component.css'
})
export class AdminIndexPageComponent {


}
