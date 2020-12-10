import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ObservableDemoComponent } from './component/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './component/pipe-demo/pipe-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserImageComponent } from './user/user-image/user-image.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [                 // Component, Directives, Pipes
    AppComponent,
    UserComponent,
    UserImageComponent,
    UserDetailComponent,
    HighlightDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent,
    HeaderComponent
  ],
  imports: [                      // Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  }
    // DataService
  ],                  // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
