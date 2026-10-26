export type statusIncident =
| 'NOUVEAU'
| 'PRIORITAIRE'
| 'EN_COURS'
| 'CLOTURER'

export type  typeIncident =
| 'INTER_URBAIN'
|  'DOMESTIQUE'

export interface Incident {
  id: string;
  titre: string;
  description: string;
  categories: string;
  type: typeIncident;
  statut: statusIncident;
  datecreation: string;
  datecloture?: string;
  citoyenid: string
}
