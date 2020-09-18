import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../shared/signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from '../shared/signup/signup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SigninModalComponent } from '../shared/signin-modal/signin-modal.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SigninComponent,
    SignupComponent,
    SigninModalComponent,
    SharedModule,
    NgbModule
  ]

})
export class CoreModule { }
