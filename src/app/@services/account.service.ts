import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  account = [{account:'admin' , password:123456},
             {account:'user1' , password:654321},
             {account:'user2' , password:456789}
  ]
}
