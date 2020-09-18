import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.scss']
})
export class SigninModalComponent implements OnInit {



  @Input() fromParent;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.fromParent);
    /* Output:
     {prop1: "Some Data", prop2: "From Parent Component", prop3: "This Can be anything"}
    */
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }



}
