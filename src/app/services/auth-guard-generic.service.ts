import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import {EventManagerService } from './event-manager.service';
import { tokenNotExpired } from '../services/helpers.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthGuardGenericService implements CanActivate{

  constructor(private router : Router, private _eventManager : EventManagerService) { }

  canActivate(){
    var access = localStorage.getItem(environment.tokenName);
    if(access != null)
      {
        var token = JSON.parse(localStorage.getItem(environment.tokenName));
        var validToken = tokenNotExpired(environment.tokenName,token.access_token)
        if(validToken === true){
          console.log('Valid Token');
          return true;
        }
        else{
          this._eventManager.showNavBar(false);
          this.router.navigate([environment.appPath.login]);
          return false;
        }  
      }
      else
      {
        this._eventManager.showNavBar(false);
        this.router.navigate([environment.appPath.login]);
        return false;
      }
  }
}
