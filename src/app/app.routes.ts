import { UserComponent } from "./user/user.component";
import { Routes } from "@angular/router";
import { LoginComponent } from "./component/auth/login/login.component";
import { RegisterComponent } from "./component/auth/register/register.component";
import { ObservableDemoComponent } from "./component/observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./component/pipe-demo/pipe-demo.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "pipe-demo",
    component: PipeDemoComponent,
  },
  {
    path: "observable-demo",
    component: ObservableDemoComponent,
  },
  {
    path: "users",
    component: UserComponent,
  },
  {
    path: "**",
    redirectTo: "login",
    pathMatch: "full",
  },
];
