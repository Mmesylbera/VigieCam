export type Role = 'CITOYEN' | 'MODERATEUR'

export interface Utilisateur {
  id: string;
  nom: string;
  email: string;
  role: Role;
}
