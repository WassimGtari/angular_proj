// auth.service.ts
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { FakeAuthApiService } from '../helpers/backend.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6ZmFsc2V9.DLTdOwxPMgCsXA9p2WDJvwimoQvL2Q6Yyn_sm6B4KRE';

  constructor(
    private fakeAuthApiService: FakeAuthApiService,
    private jwtHelper: JwtHelperService
  ) {}

  login(credentials: {
    username: string;
    password: string;
  }): Observable<User | null> {
    const users = this.fakeAuthApiService.createDb().users; // Accédez à la base de données simulée
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    this.setToken(this.token);
    return of(user || null); // Retourne l'utilisateur trouvé ou null s'il n'existe pas
  }
  setToken(token: string): void {
    // Stockez le token JWT dans le stockage local
    localStorage.setItem('token', token);
  }
  logout(): void {
    localStorage.removeItem('token');
  }
  /* eslint-disable @typescript-eslint/no-explicit-any */
  get currentUser(): any {
    const token = localStorage.getItem('token');
    if (!token) return null;

    return new JwtHelperService().decodeToken(token);
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
  isLoggedIn(): boolean {
    // Check if user is logged in (check JWT token)
    const token = localStorage.getItem('token');
    return token !== null && !this.jwtHelper.isTokenExpired(token);
  }
}
