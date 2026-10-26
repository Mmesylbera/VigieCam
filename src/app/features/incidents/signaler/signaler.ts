
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../core/services/auth';
import { IncidentService } from '../../../core/services/incident';
import type { Incident, typeIncident } from '../../../models/incident';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-signaler',
  styleUrl: './signaler.css',
  templateUrl: './signaler.html',
})
export class Signaler {
  constructor(
    private auth: Auth,
    private incidentService: IncidentService,
  ) {}

  titre = signal('');
  description = signal('');
  categories = signal('');
  type = signal('');
  message = signal('');

  enregistrer(): void {
    if (
      !this.titre().trim() &&
      !this.description().trim() &&
      !this.categories().trim() &&
      !this.type()
    ) {
      this.message.set('Veuillez remplir tous les champs.');
      return;
    }

    const citoyen = this.auth.Utilisateur();

    if (!citoyen) {
      this.message.set('Veuillez vous connecter avant de signaler un incident.');
      return;
    }

    const nouvelIncident: Incident = {
      id: crypto.randomUUID(),
      titre: this.titre().trim(),
      description: this.description().trim(),
      categories: this.categories(),
      type: this.type() as typeIncident,
      statut: 'NOUVEAU',
      datecreation: new Date().toISOString(),
      datecloture: '',
      citoyenid: citoyen.id,
    };

    this.incidentService.ajouter(nouvelIncident);

    this.message.set('Votre signalement a été enregistré avec succès.');

    this.titre.set('');
    this.description.set('');
    this.categories.set('');
    this.type.set('');
  }
}
