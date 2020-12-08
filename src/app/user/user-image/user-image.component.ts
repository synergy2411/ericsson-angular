import { User } from './../../model/user.model';
import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent {

  @Input() user: User;

  @Output() childEvent = new EventEmitter<any>();

  onClick(user: any){
    console.log('Clicked');
    this.childEvent.emit(user);
  }

}
