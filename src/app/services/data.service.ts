import { USER_DATA } from './../model/mocks';
import { User } from './../model/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class DataService {

  getData(): User[] {
    return USER_DATA;
  }

}
