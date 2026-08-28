import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from './@services/account.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const accountService = inject(AccountService);

    if(localStorage.getItem('token') === accountService.tokenData){
      alert("登入成功");
      return true;
    }
    else{
      alert("尚未登入");
      return router.createUrlTree(['/home']);
    }

};
