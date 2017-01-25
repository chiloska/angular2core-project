import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*Components*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DeniedComponent } from './components/denied/denied.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AdminComponent } from './components/admin/admin.component';

/*Services*/
import  { AuthentificationService } from './services/authentification.service';
import { EventManagerService } from './services/event-manager.service';
import { AuthGuardGenericService } from './services/auth-guard-generic.service';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';
import { HelpersService } from './services/helpers.service';

/*Routes*/
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DeniedComponent,
    FooterComponent,
    NotfoundComponent,
    PrincipalComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthentificationService,
    EventManagerService,
    AuthGuardGenericService,
    AuthGuardAdminService,
    HelpersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
