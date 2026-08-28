import { inject, Injectable, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor() { }

  tokenData !: string;
  isLogin = signal(false);
  isAdmin = signal(false);

  changePermissions(data: string) {
    switch (data) {
      case "admin":
        this.isLogin.set(true);
        this.isAdmin.set(true);
        break;

      case "user":
        this.isLogin.set(true);
        this.isAdmin.set(false);
        break;
      default:
        this.isLogin.set(false);
        this.isAdmin.set(false);
        break;
    }
  }




  account = [{ account: 'admin', password: '123456', permissions: 'admin' },
  { account: 'user1', password: '654321', permissions: 'user' },
  { account: 'user2', password: '456789', permissions: 'user' }
  ]

  token: tokenData[] = [{
    account: 'test',
    password: '0000',
    permissions: 'admin',
    timedata: 9999999,
    token: 'testToken'
  }];


  fb = inject(FormBuilder);
  surveyList = this.fb.array<FormGroup<any>>([]);

  fakeSurveyData = [
    {
      id: 'survey001',
      surveyTitle: '員工工作滿意度調查',
      icon: '💼',
      suveryIntroduce: '了解員工對工作環境與公司制度的滿意程度',
      startTime: '2026-07-01',
      endTime: '2026-07-31',
      questions: this.fb.array([
        this.fb.group({
          questionTitle: ['你對目前的工作環境滿意嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['你對目前的工作內容滿意嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['你對公司的薪資福利制度滿意嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['你與同事之間的合作關係如何？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['你對主管的管理方式滿意嗎？'],
          questionType: ['0'],
          options: []
        })
      ]),
      answerTime: '5',
      surveyCreator: '管理員'
    },

    {
      id: 'survey002',
      surveyTitle: '2026上半年客戶服務滿意度',
      icon: '😊',
      suveryIntroduce: '了解客戶對服務品質與服務人員的滿意度',
      startTime: '2026-06-01',
      endTime: '2026-08-15',
      questions: this.fb.array([
        this.fb.group({
          questionTitle: ['您對本次服務的整體滿意度如何？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['服務人員的態度是否親切有禮？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您的問題是否有獲得妥善處理？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對客服回覆速度是否滿意？'],
          questionType: ['0'],
          options: []
        })
      ]),
      answerTime: '4',
      surveyCreator: '客服部'
    },

    {
      id: 'survey003',
      surveyTitle: '網站使用體驗調查',
      icon: '💻',
      suveryIntroduce: '了解使用者對目前網站功能與操作體驗的看法',
      startTime: '2026-08-01',
      endTime: '2026-09-15',
      questions: this.fb.array([
        this.fb.group({
          questionTitle: ['您覺得網站整體操作是否容易上手？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您覺得網站頁面的載入速度如何？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您是否能快速找到需要的功能？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對網站整體視覺設計滿意嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您認為網站還需要增加哪些功能？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對目前網站整體使用體驗的滿意度如何？'],
          questionType: ['0'],
          options: []
        })
      ]),
      answerTime: '7',
      surveyCreator: '網站管理員'
    },

    {
      id: 'survey004',
      surveyTitle: '產品使用滿意度調查',
      icon: '📦',
      suveryIntroduce: '蒐集使用者對產品功能與品質的使用感受',
      startTime: '2026-08-20',
      endTime: '2026-09-30',
      questions: this.fb.array([
        this.fb.group({
          questionTitle: ['您對產品整體品質滿意嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您覺得產品的功能是否符合需求？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您覺得產品的操作是否方便？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對產品的外觀設計滿意嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您是否願意再次購買或使用本產品？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您會推薦本產品給其他人嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您認為產品還有哪些地方需要改善？'],
          questionType: ['0'],
          options: []
        })
      ]),
      answerTime: '8',
      surveyCreator: '產品部'
    },

    {
      id: 'survey005',
      surveyTitle: '2026年中秋節活動調查',
      icon: '🎑',
      suveryIntroduce: '了解員工對公司中秋節活動安排的期待與想法',
      startTime: '2026-09-01',
      endTime: '2026-09-20',
      questions: this.fb.array([
        this.fb.group({
          questionTitle: ['您是否期待今年的中秋節活動？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您比較喜歡哪一類型的中秋節活動？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您認為活動安排的時間是否合適？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對今年活動內容有什麼期待？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對過去中秋節活動有什麼建議？'],
          questionType: ['0'],
          options: []
        })
      ]),
      answerTime: '5',
      surveyCreator: '人資部'
    },

    {
      id: 'survey006',
      surveyTitle: '年度員工福利需求調查',
      icon: '🎁',
      suveryIntroduce: '調查員工對明年度福利制度的需求與建議',
      startTime: '2026-10-01',
      endTime: '2026-10-31',
      questions: this.fb.array([
        this.fb.group({
          questionTitle: ['您對目前公司的福利制度滿意嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您最重視哪一類型的員工福利？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您希望公司增加哪些福利項目？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對目前的休假制度滿意嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對明年度員工福利制度有什麼建議？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您認為目前福利制度最需要改善的地方是什麼？'],
          questionType: ['0'],
          options: []
        })
      ]),
      answerTime: '6',
      surveyCreator: '人資部'
    },

    {
      id: 'survey007',
      surveyTitle: '年度員工福利需求調查2',
      icon: '⭐',
      suveryIntroduce: '調查員工對明年度福利制度的需求與建議',
      startTime: '2026-10-01',
      endTime: '2026-10-31',
      questions: this.fb.array([
        this.fb.group({
          questionTitle: ['您目前最滿意公司的哪一項福利？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您認為公司目前提供的福利是否足夠？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您希望增加哪一項新的福利？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對公司的健康與休閒福利有什麼看法？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您對明年度福利制度最期待的改變是什麼？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您還有其他福利方面的建議嗎？'],
          questionType: ['0'],
          options: []
        }),
        this.fb.group({
          questionTitle: ['您願意參與公司未來的福利制度規劃嗎？'],
          questionType: ['0'],
          options: []
        })
      ]),
      answerTime: '8',
      surveyCreator: '人資部'
    }
  ];
}

interface tokenData {
  account: string;
  password: string;
  permissions: string;
  timedata: number;
  token: string;
}
