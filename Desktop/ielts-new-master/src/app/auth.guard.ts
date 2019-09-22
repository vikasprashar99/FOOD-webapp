import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): Promise < boolean > {
    return new Promise((resolve) => {
      Auth.currentAuthenticatedUser({
          bypassCache: false
        })
        .then((user) => {
          if(user){
            resolve(true);
          }
        })
        .catch((err) => {
          // console.log(err);
          if(err === 'not authenticated'){
            this.router.navigate(['/changePassword']);
          }
          resolve(false);
        });
    });
  }
  
}
