import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token : string = null;

  constructor(private router : Router) { }

  onRegister(email : string, password : string){
    console.log("test");
    firebase.default.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("[USER CREATED]");
      }).catch(err => console.log(err));
  }

  onLogin(email : string, password : string){
    firebase.default.auth().signInWithEmailAndPassword(email, password)
      .then(response=>{
        console.log('[LOGIN - SUCCESS]')

        firebase.default.auth().currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
            this.router.navigate(['users']);
          }).catch(err=> console.log('[TOKEN NOT RECEIVED]'))

      }).catch(err => console.log(err));
  }

  getToken() {
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

}

// ng g s services/auth
