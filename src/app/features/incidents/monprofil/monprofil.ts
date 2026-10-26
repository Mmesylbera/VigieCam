import { Auth } from './../../../core/services/auth';
import { Component , inject} from '@angular/core';
import {  RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-monprofil',
  styleUrl: './monprofil.css',
  templateUrl: './monprofil.html',
})
export class Monprofil {
  private Auth = inject(Auth);

  utilisateur = this.Auth.Utilisateur
}
