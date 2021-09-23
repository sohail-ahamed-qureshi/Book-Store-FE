import { AuthguardService } from './Services/authguard.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  token: any;
  constructor(private authService: AuthguardService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authService.getToken()) {
      this.router.navigateByUrl('home');
    }
    this.token = this.authService.getToken();
    if (this.token != null) {
      return true;
    }
    return false;

  }
}
