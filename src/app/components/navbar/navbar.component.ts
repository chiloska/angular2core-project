import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';

import {AuthentificationService } from '../../services/authentification.service';
import { EventManagerService } from '../../services/event-manager.service';
import { HelpersService } from '../../services/helpers.service';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showNavBar: boolean;

  constructor(private router:Router, private _authService: AuthentificationService, private _eventsManager:EventManagerService ){
        this._eventsManager.showNavBarEmitter.subscribe((mode)=>{
            if(mode != null){
                this.showNavBar = mode;
            }
            else
            {
                this.showNavBar = true;
            }
        })
  }

  ngOnInit() {
  }

  logout(){
        this._authService.logout();
        this.showNavBar = false;
        this.router.navigate([environment.appPath.login])
    }

}
