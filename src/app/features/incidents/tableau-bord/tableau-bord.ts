import { Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IncidentService } from '../../../core/services/incident';
import type { Incident } from '../../../models/incident';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../core/services/auth';
import { Inject } from '@angular/core';

@Component({
  imports: [DatePipe, RouterLink],
  selector: 'app-tableau-bord',
  styleUrl: './tableau-bord.css',
  templateUrl: './tableau-bord.html',
})
export class TableauBord {
   auth = inject(Auth);

  private incidentservice = inject(IncidentService);

  incidentproblem: Incident[] = this.incidentservice.obtenirtous();

  totalincidents = computed(() => this.incidentproblem.length);

  nouveaux = computed(
    () => this.incidentproblem.filter(
      (incident) => incident.statut === 'NOUVEAU').length
  );

  prioritaire = computed(
    () => this.incidentproblem.filter(
      (incident) => incident.statut === 'PRIORITAIRE').length
  );

  clotures = computed(
    () => this.incidentproblem.filter(
      (incident) => incident.statut === 'CLOTURER').length
  );
}
