import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(form : NgForm){
    console.log('[EMAIL]', form.value.email);
    console.log('[PASSWORD]', form.value.password);
    this.authService.onLogin(form.value.email, form.value.password);
  }

  // check(f : NgForm){

  // }
}
