import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserImageComponent } from './user/user-image/user-image.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [                 // Component, Directives, Pipes
    AppComponent,
    UserComponent,
    UserImageComponent,
    UserDetailComponent,
    HighlightDirective
  ],
  imports: [                      // Modules
    BrowserModule,
    FormsModule
  ],
  providers: [],                  // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
