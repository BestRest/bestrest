import { Component, OnInit, Input } from '@angular/core';
import { SignInFormComponent } from '../authorization-page/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Input() SignInFormComponent: SignInFormComponent;
  @Input() SignUpFormComponent: SignUpFormComponent;
  constructor() { }

  ngOnInit() {
  }

}
