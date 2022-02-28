import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createAccountForm = this.fb.group({
      businessName: ['', Validators.required],
      businessEmail: ['', Validators.required],
      contactPerson: [''],
      city: [''],
      postCode: [''],
      taxId: [''],
      phoneNumber: [''],
      address: [''],
      state: [''],
      country: ['']
    })
  }

  ngOnInit(): void {
  }

  save(){

  }

}
