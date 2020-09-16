import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../shared/signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from '../shared/signup/signup.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SigninComponent,
    SignupComponent,
    SharedModule
  ]

})
export class CoreModule { }
