import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.scss']
})
export class CreateImageComponent implements OnInit {

  name = 'Angular';
  stepper: Stepper;

  next() {
    this.stepper.next();
  }

  constructor(private modalService: NgbModal){

  }

  // onSubmit() {
  //   return false;
  // }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  confirmOrder(content: any){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'md', centered: true });
  }

  submit(){

  }
}
