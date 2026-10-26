import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Signaler } from './features/incidents/signaler/signaler';
import { TableauBord } from './features/incidents/tableau-bord/tableau-bord';
import { DetailIncident } from './features/incidents/detail-incident/detail-incident';
import { ModifierIncident } from './features/incidents/modifier-incident/modifier-incident';
import { Messignalements } from './features/incidents/messignalements/messignalements';
import { Monprofil } from './features/incidents/monprofil/monprofil';

export const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch: 'full'},
 {path: 'login', component: Login},
 {path: 'signaler', component: Signaler},
 {path: 'tableau-bord', component: TableauBord},
 {path: 'incidents/:id', component: DetailIncident},
 {path: 'incidents/:id/modifier', component: ModifierIncident},
 {path: 'messignalements', component: Messignalements},
 {path: 'monprofil', component: Monprofil}
];
