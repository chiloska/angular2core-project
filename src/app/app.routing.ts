import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { environment } from '../environments/environment';


/*Components*/
import { LoginComponent } from './components/login/login.component';
import { DeniedComponent } from './components/denied/denied.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AdminComponent } from './components/admin/admin.component';

/*Services*/
import { AuthGuardGenericService } from './services/auth-guard-generic.service';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';

const appRoutes : Routes = [
    {
        path : '',
        redirectTo : environment.appPath.redirect + environment.appPath.principal,
        pathMatch : 'full'
    },
    {
        path : environment.appPath.login,
        component : LoginComponent
    },
    {
        path : environment.appPath.principal,
        component : PrincipalComponent,
        canActivate : [AuthGuardGenericService]
    },
    {
        path : environment.appPath.admin,
        component : AdminComponent,
        canActivate : [AuthGuardAdminService]
    },
    {
        path : environment.appPath.denied,
        component : DeniedComponent,
        canActivate : [AuthGuardGenericService]
    },
    {
        path : environment.appPath.notFound,
        component : NotfoundComponent,
        canActivate : [AuthGuardGenericService]
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes)