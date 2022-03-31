import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordHidden = true;
  loginForm: FormGroup;

 // loading = false;

  constructor(private router: Router, private fb: FormBuilder,
    // private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  togglePassword = () => {
    this.passwordHidden = !this.passwordHidden;
  }

  onSubmit() {
    // this.loading = true;
    console.log(`this.loginForm.value --- `, this.loginForm.value)
    if (this.loginForm.invalid) {
      // this.loading = false;
      return;
    }

    // const controls = this.loginForm.controls;
    // const loginData = {
    //   email: controls.email.value,
    //   password: controls.password.value
    // };
    // localStorage.setItem('currentEmail', controls.email.value);
  }

}
