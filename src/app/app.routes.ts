import { CounterComponent } from './component/counter/counter.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { SpecificationComponent } from './component/product/specification/specification.component';
import { OverviewComponent } from './component/product/overview/overview.component';
import { ProductComponent } from './component/product/product.component';
import { UserComponent } from './user/user.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ObservableDemoComponent } from './component/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './component/pipe-demo/pipe-demo.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'pipe-demo',
    component: PipeDemoComponent,
  },
  {
    path: 'observable-demo',
    component: ObservableDemoComponent,
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate : [LoginGaurdService]
  }, {
    path : 'products',
    component : ProductComponent,
    children : [
      {
        path : 'overview/:id/:name',
        component : OverviewComponent
      }, {
        path : 'specification',
        component : SpecificationComponent
      }
    ]
  }, {
    path : 'lazy',
    // loadChildren : './lazy/lazy.module#LazyModule'       // path/to/moduleFile/NameOFModuleFile#ModuleClassName
    loadChildren : () => import('./lazy/lazy.module').then(m => m.LazyModule)       // path/to/moduleFile/NameOFModuleFile#ModuleClassName
  },{
    path : 'counter',
    component : CounterComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
