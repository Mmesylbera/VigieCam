import { Injectable, Service } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Storage {
  sauvegarder(cle: string, valeur: unknown): void {
    localStorage.setItem(cle, JSON.stringify(valeur));
  }

  recuperer<T>(cle: string): T | null {
    const donnees = localStorage.getItem(cle);

    if (donnees === null) {
      return null;
    }
    return JSON.parse(donnees) as T;
  }

  supprimer(cle: string): void {
    localStorage.removeItem(cle)
  }
  
}
