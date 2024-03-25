// fake-auth-api.service.ts
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeAuthApiService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'user1', password: 'password1' },
      { id: 2, username: 'user2', password: 'password2' },
    ];

    return { users };
  }
  /* eslint-disable @typescript-eslint/no-explicit-any */
  authenticate(credentials: {
    username: string;
    password: string;
  }): Observable<any> {
    // Vérifiez les informations d'identification et renvoyez un token JWT si elles sont correctes
    const user = this.createDb().users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (user) {
      const token = 'votre_token_jwt'; // Générez un token JWT ici
      return of({ token });
    } else {
      return of(null);
    }
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
