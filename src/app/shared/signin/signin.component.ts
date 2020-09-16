import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email:string;
  password:string;
  constructor() { }

  ngOnInit(): void {
  }

      
  onSubmit(credentials: NgForm) {

  }

}
