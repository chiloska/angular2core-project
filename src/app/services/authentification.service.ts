import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthentificationService {
  public token: string;

  constructor(private _http: Http) {
        var currentUser = JSON.parse(localStorage.getItem(environment.tokenName))
        this.token = currentUser && currentUser.access_token;
  }

  login(username: string, password: string){
        var creds = "username=" + username + "&password=" + password + "&grant_type=password";
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(environment.apiServer + environment.endpoints.auth, creds,{headers : headers});
  }

  logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem(environment.tokenName);
  }

}
