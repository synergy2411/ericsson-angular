import { User } from './../../model/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  @Input() user: User;

  myClasses = {'my-border' : true, feature : false};

  myStyles = { 'text-decoration' : 'underline'};

  messages = { success : true, error : false};

  onToggleStyle() {

    this.myStyles["text-decoration"] = 'none';

    this.messages.success = !this.messages.success;
    this.messages.error = !this.messages.error;

    this.myClasses.feature = !this.myClasses.feature;
    this.myClasses['my-border'] = !this.myClasses['my-border'];
  }
}
