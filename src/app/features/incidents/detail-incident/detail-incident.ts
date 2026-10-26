
import { IncidentService } from './../../../core/services/incident';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Incident } from '../../../models/incident';
import { DatePipe } from '@angular/common';

@Component({
  imports: [RouterLink, DatePipe],
  selector: 'app-detail-incident',
  styleUrl: './detail-incident.css',
  templateUrl: './detail-incident.html',
})
export class DetailIncident {
  private route = inject(ActivatedRoute);
  private IncidentService = inject(IncidentService);
  private Router = inject(Router)

  Incident = signal<Incident | undefined>(undefined);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const resultat = this.IncidentService
      .obtenirtous()
      .find(item => item.id === id);

      this.Incident.set(resultat)
    }
  }

  supprimer(id: string): void {
    const confirmation = confirm(
      'Voulez-vous vraiment supprimer cet incident ?'
    );
    if (confirmation) {
    this.IncidentService.supprimer(id);
    this.Router.navigate(['/tableau-bord']);
    }
  }
}
