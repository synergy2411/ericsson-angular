import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [                 // Component, Directives, Pipes
    AppComponent,
    UserComponent
  ],
  imports: [                      // Modules
    BrowserModule
  ],
  providers: [],                  // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
