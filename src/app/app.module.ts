
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserImageComponent } from './user/user-image/user-image.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './component/pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { DataService } from './services/data.service';

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
    RegisterComponent
  ],
  imports: [                      // Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DataService ],                  // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
