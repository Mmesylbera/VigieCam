import { IncidentService } from './../../../core/services/incident';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Incident } from '../../../models/incident';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-modifier-incident',
  styleUrl: './modifier-incident.css',
  templateUrl: './modifier-incident.html',
})
export class ModifierIncident implements OnInit{
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private IncidentService = inject(IncidentService);


  incidentId = '';
  titre = signal('');
  description = signal('');
  categories = signal('');
  type = signal('');

  message = signal('');

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.message.set('Identifiant de incident introuvable.');
      return;
    }

    const incidentTrouve = this.IncidentService
    .obtenirtous()
    .find(item => item.id === id);

    if (!incidentTrouve) {
      this.message.set('Incident introuvable.');
      return;
    }

    this.incidentId = incidentTrouve.id;
    this.titre.set(incidentTrouve.titre);
    this.description.set(incidentTrouve.description);
    this.categories.set(incidentTrouve.categories);
    this.type.set(incidentTrouve.type);
  }

  enregistrer(): void {
    const incidentOriginal = this.IncidentService
    .obtenirtous()
    .find(item => item.id === this.incidentId);

    if (!incidentOriginal) {
      this.message.set('Incident introuvable');
      return;
    }

    if (
      !this.titre().trim() &&
      !this.description().trim() &&
      !this.categories() &&
      !this.type()
    ) {
      this.message.set('Vieullez remplis tous les champs.');
      return;
    }

    const incidentModifie: Incident = {
      ...incidentOriginal,
      titre: this.titre().trim(),
      description: this.description().trim(),
      categories: this.categories(),
      type: this.type() as Incident['type']
    };

    this.IncidentService.modifier(incidentModifie);
    this.router.navigate(['incidents', this.incidentId]);
  }
}
