import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  account = [{account:'admin' , password:'123456' , permissions:'admin'},
             {account:'user1' , password:'654321' , permissions:'user'},
             {account:'user2' , password:'456789' , permissions:'user'}
  ]
}
