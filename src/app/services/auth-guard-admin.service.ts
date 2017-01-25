import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import {EventManagerService } from './event-manager.service';
import { HelpersService } from '../services/helpers.service';
import { tokenNotExpired } from '../services/helpers.service';

import { environment } from '../../environments/environment'

@Injectable()
export class AuthGuardAdminService implements CanActivate {

  constructor(private router : Router, private _eventManager : EventManagerService ) { }

  canActivate(){
    if(localStorage.getItem(environment.tokenName))
      {
        var a = JSON.parse(localStorage.getItem(environment.tokenName));
        const jwtHelper = new HelpersService();
        var decode = jwtHelper.decodeToken(a.access_token);

        if(decode.role.indexOf(environment.validRoles.admin) > -1)
          {
            var validToken = tokenNotExpired(environment.tokenName,a.access_token)
            
            if(validToken === true){
              console.log('Valid Token and Role');
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
            this.router.navigate([environment.appPath.denied]);
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
