import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


 signup:any;

 firstName:string;
 lastName:string;
 email:string;
 password:string;
 cpassword:string;
 phone: number;


  constructor() { }
    
 

  ngOnInit(): void {
  }




 
  signupUser(){
    this.signup.userTypeId=2 //Admin
   // auth pass signup user
   /*
    this.authService.signup(this.signup).subscribe(result => {
      console.log(result);
      this.router.navigate(['/signin']);
    },err =>{
      console.log(err);
      alert(JSON.stringify(err));
    });
    //if success navigate to login
    //fail display error*/
  }




}
