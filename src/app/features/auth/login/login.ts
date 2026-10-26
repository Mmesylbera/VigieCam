import { TableauBord } from './../../incidents/tableau-bord/tableau-bord';
import { Auth } from './../../../core/services/auth';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
private router = inject(Router)

  nom = signal('');
  email = signal('');
  message = signal('');

  constructor(private Auth: Auth) {}

  connecter(): void {
    if (this.nom().trim() && this.email().trim()) {
      this.Auth.connecter(this.nom().trim(), this.email().trim());
      this.router.navigate(['/tableau-bord']);
      this.message.set('Connexion réussie !');
    } else {
      this.message.set('Veuillez remplir tous les champs.');
    }
  }
}
