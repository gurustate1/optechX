import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PlansComponent } from './plans/plans.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      },
      {
        path: 'plans',
        component: PlansComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    CreateAccountComponent,
    PlansComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
