import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  name: string,
  state: StateClient,
  tva: number,
  id: number,  
  totalCaHt: number,
  comment: string
}
