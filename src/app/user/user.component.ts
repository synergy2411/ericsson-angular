import { Component } from '@angular/core';

@Component({
  selector : 'app-user',
  templateUrl : './user.component.html',
  styleUrls : ['./user.component.css']
})
export class UserComponent {
  user = {
    firstName : 'Bill',
    lastName : 'Gates',
    isWorking : true,
    income  : 50000,
    company : 'Microsoft',
    votes : 120,
    dob : new Date('Dec 21, 1965'),
    image : 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg'
  };
}
