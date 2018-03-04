import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';
import { SignInFormComponent } from './authorization-page/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './homepage/sign-up-form/sign-up-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const routes = [
  {path: '', component: HomepageComponent},
  {path: 'authorization', component: AuthorizationPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationPageComponent,
    SignInFormComponent,
    SignUpFormComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
