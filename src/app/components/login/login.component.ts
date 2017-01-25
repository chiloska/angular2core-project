import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import {AuthentificationService } from '../../services/authentification.service'
import { EventManagerService } from '../../services/event-manager.service'
import { HelpersService } from '../../services/helpers.service'

import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  error: string = '';
  token : any = {};
  loading: boolean = false;
  hide : boolean;
  
  constructor(private router: Router, private _authService : AuthentificationService, private _eventService : EventManagerService) {
      this.hide = false;
  }

  ngOnInit() {
    this._authService.logout();
  }

  login() {
        event.preventDefault();
        this.loading = true;
        this._authService.login(this.model.username, this.model.password)
            .subscribe(
            res => {
                let token = res.json()
                const jwtHelper = new HelpersService();
                var decode = jwtHelper.decodeToken(token.access_token)

                if(decode.role.indexOf(environment.validRoles.admin) > -1){
                    localStorage.setItem(environment.tokenName, JSON.stringify(token));
                    this._eventService.showNavBar(true);
                    this.router.navigate([environment.appPath.principal]);
                }
                else{
                    this.hide = true;
                    this.error = "Tu usuario no cuenta con los permisos necesarios para Ingresar. Favor de contactar a tu Supervisor.";
                    this.loading = false;
                    setTimeout(() => {
                        this.hide = false;
                    }, 8000);
                }
            },
            error =>{
                this.hide = true;
                this.error = "Usuario o Contraseña Incorrecto";
                this.loading = false;
                setTimeout(() => {
                    this.hide = false;
                }, 8000);
            });
    }

}
