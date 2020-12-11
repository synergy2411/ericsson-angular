import { ChartsModule, ThemeService } from 'ng2-charts';
import { BarComponent } from './component/chart/bar/bar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { ObservableDemoComponent } from './component/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './component/pipe-demo/pipe-demo.component';
import { OverviewComponent } from './component/product/overview/overview.component';
import { ProductComponent } from './component/product/product.component';
import { SpecificationComponent } from './component/product/specification/specification.component';
import { HighlightDirective } from './directives/highlight.directive';
import { EmployeeModule } from './employee/employee.module';
import { FilterPipe } from './pipes/filter.pipe';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserImageComponent } from './user/user-image/user-image.component';
import { UserComponent } from './user/user.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { rootReducer } from './store/reducers/counter.reducer';
import { CounterComponent } from './component/counter/counter.component';



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
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
    BarComponent,
    CounterComponent
  ],
  imports: [                      // Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule,
    ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({reducer : rootReducer}),
    StoreDevtoolsModule.instrument({logOnly : environment.production})
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  }, {
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  }, ThemeService
    // DataService
  ],                  // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
