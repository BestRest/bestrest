import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  userSignUp: FormGroup;
  newUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor() {
    this.userSignUp = new FormGroup({
      firstName: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ])),

      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12)
      ])),

      email: new FormControl('', Validators.compose([
      Validators.required])),

      password: new FormControl('', Validators.compose([
        Validators.required]))
  });

    this.userSignUp.patchValue(this.newUser);
  }

  onSubmit() {
    if (this.userSignUp.invalid) {
      console.error('form invalid');

      return;
    }

    console.log(this.userSignUp);
    console.log(this.userSignUp.value);
  }

  ngOnInit() {
  }

}
