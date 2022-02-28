import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
 
 
  
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean {
    // const currentUser = this.authService.currentUserValue;
    // if (currentUser) {
    //     // logged in so return true
    //     return true;
    // }

    // not logged in so redirect to login page with the return url
    const returnUrl = `/${segments.map(segment => segment.toString()).join('/')}`;
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl } });
    return false;
  }

  constructor(
    private router: Router,
   // private authService: AuthService
  ) { }

  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // const currentUser = this.authService.currentUserValue;
    // if (currentUser) {
    //     // logged in so return true
    //     return true;
    // }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
