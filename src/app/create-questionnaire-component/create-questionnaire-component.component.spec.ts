import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionnaireComponentComponent } from './create-questionnaire-component.component';

describe('CreateQuestionnaireComponentComponent', () => {
  let component: CreateQuestionnaireComponentComponent;
  let fixture: ComponentFixture<CreateQuestionnaireComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateQuestionnaireComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateQuestionnaireComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
