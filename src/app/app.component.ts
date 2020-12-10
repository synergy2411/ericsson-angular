import { AuthService } from './services/auth.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user-app';
  bool = true;

  onToggleUser() {
    this.bool = !this.bool;
  }

  constructor(public authService: AuthService){}

  ngOnInit(){
    firebase.default.initializeApp({
      apiKey: "AIzaSyASz_QTuBkMVlRhd_vCejykF8g2yLdHDmY",
      authDomain: "ericsson-proj.firebaseapp.com"
    })
  }

  onLogout(){
    this.authService.onLogout();
  }
}
