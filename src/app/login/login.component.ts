import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.credentials).subscribe((user) => {
      if (user) {
        // Connexion réussie, rediriger vers le tableau de bord
        this.router.navigate(['/followers']);
      } else {
        // Identifiants incorrects, afficher un message d'erreur ou effectuer une autre action appropriée
        console.log('Identifiants incorrects');
        alert('Identifiants incorrects');
      }
    });
  }
}
