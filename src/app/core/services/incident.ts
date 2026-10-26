import { Storage } from './storage';
import { inject, Injectable } from '@angular/core';
import type { Incident } from '../../models/incident';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  private Storage = inject(Storage)
  private incidents: Incident[] = [];

  obtenirtous(): Incident[] {
    return this.incidents;
  }

  obtenirparcitoyen(citoyenId: string): Incident[] {
    return this.incidents.filter(
      (incident) => incident.citoyenid === citoyenId);
  }

  ajouter(sam: Incident): void {
    this.incidents.push(sam);
  }

  supprimer(id: string): void {
    this.incidents = this.incidents.filter(
      (incident) => incident.id !== id);
  }

  modifier(incidentModifie: Incident): void {
    const incidents = this.obtenirtous();

    const incidentsMisAJour = incidents.map(incident =>
      incident.id === incidentModifie.id
      ? incidentModifie
      : incident
    );

    this.Storage.sauvegarder('vigiecam_incidents', incidentsMisAJour)
  }
}
