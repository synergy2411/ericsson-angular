import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token : string = null;

  constructor() { }

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
