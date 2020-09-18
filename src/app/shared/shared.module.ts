import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
   


@NgModule({
  declarations: [SigninModalComponent, SigninComponent, SignupComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
 
})
export class SharedModule { }
