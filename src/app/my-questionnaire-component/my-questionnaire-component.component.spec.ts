import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuestionnaireComponentComponent } from './my-questionnaire-component.component';

describe('MyQuestionnaireComponentComponent', () => {
  let component: MyQuestionnaireComponentComponent;
  let fixture: ComponentFixture<MyQuestionnaireComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyQuestionnaireComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyQuestionnaireComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
