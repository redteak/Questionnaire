import { Component } from '@angular/core';
import { QuestionnaireListComponentComponent } from "../questionnaire-list-component/questionnaire-list-component.component";

@Component({
  selector: 'app-homepage',
  imports: [QuestionnaireListComponentComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {


}
