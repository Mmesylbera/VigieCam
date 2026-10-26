
import { IncidentService } from './../../../core/services/incident';
import { Auth } from './../../../core/services/auth';
import { DatePipe } from '@angular/common';
import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [DatePipe, RouterLink],
  selector: 'app-messignalements',
  styleUrl: './messignalements.css',
  templateUrl: './messignalements.html',
})
export class Messignalements {
  private Auth = inject(Auth);
  private IncidentService = inject(IncidentService);

  mesIncidents = computed(() => {
    const citoyen = this.Auth.Utilisateur();

    if(!citoyen) {
      return [];
    }

    return this.IncidentService
      .obtenirparcitoyen(citoyen.id);
  });
}
