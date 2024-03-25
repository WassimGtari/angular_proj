import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AutGuardAdminService {
  constructor(private authservice: AuthService, private router: Router) {}
  canActivate(): boolean {
    const user = this.authservice.currentUser;
    if (user && user.admin) return true;
    this.router.navigate(['/noaccess']);
    return false;
  }
}
export const IsGuardAdmin: CanActivateFn = (): boolean => {
  return inject(AutGuardAdminService).canActivate();
};
