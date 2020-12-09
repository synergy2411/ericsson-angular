import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email  = new FormControl('', [
    Validators.email,
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamationValidator
  ]);

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email : this.email,
      password : this.password
    });
  }

  onRegister() {
    console.log('[EMAIL]', this.registerForm.value.email);
    console.log('[PASSWORD]', this.registerForm.value.password);
  }

  hasExclamationValidator(input: FormControl) {
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : {needExclamation : true};
  }


  ngOnInit() {
  }

}
