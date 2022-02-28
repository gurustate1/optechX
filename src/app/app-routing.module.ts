import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule) },
 { path: '', loadChildren: () => import('../app/pages/pages.module').then(m => m.PagesModule) },
//  { path: '', canLoad: [AuthGuard], loadChildren: () => import('@app/pages/pages.module').then(m => m.PagesModule) },
  { path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
