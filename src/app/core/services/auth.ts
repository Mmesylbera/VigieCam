import { Storage } from './storage';
import { Utilisateur } from './../../models/utilisateur';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  Utilisateur = signal<Utilisateur | null>(null);

  constructor(private Storage: Storage) {
    const utilisateurenregistre =
    this.Storage.recuperer<Utilisateur>('citoyen');

    if (utilisateurenregistre) {
      this.Utilisateur.set(utilisateurenregistre);
    }
  }

  connecter(nom: string, email: string): void {

    const utilisateurexistant =
    this.Storage.recuperer<Utilisateur>('citoyen');

    if (utilisateurexistant && utilisateurexistant.email === email) {
       this.Utilisateur.set(utilisateurexistant);
       return;
    }

    const citoyen: Utilisateur = {
      id: crypto.randomUUID(),
      nom: nom,
      email: email,
      role: 'CITOYEN'
    };
    this.Utilisateur.set(citoyen);
    this.Storage.sauvegarder('citoyen', citoyen);
  }

  deconnecter(): void {
    this.Utilisateur.set(null);
    this.Storage.supprimer('citoyen');
  }
    }

