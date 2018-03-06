import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  userSignIn: FormGroup;

  existedUser = {
    login: '', password: ''
  };

  constructor() {
    this.userSignIn = new FormGroup({
      login: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.userSignIn.patchValue(this.existedUser);
  }
  onSubmit() {
    if (this.userSignIn.invalid) {
      console.error('form invalid');

      return;
    }

    console.log(this.userSignIn);
    console.log(this.userSignIn.value);

  }

  ngOnInit() {
  }

}
