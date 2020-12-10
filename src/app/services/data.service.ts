import { AuthService } from './auth.service';
import { USER_DATA } from './../model/mocks';
import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient, private authService : AuthService) {}

  getData(): User[] {
    return USER_DATA;
  }

  getLocalJsonUserData(){
    return this.httpClient.get("./assets/data/userdata.json")
  }

  getRemoteJsonUserData(){
    return this.httpClient
    .get(`https://ericsson-proj-default-rtdb.firebaseio.com/userdata.json?auth=${this.authService.getToken()}`)
  }

}
