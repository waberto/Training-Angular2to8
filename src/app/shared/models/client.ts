import { ClientI } from './../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {

  state = StateClient.ACTIVE;
  tva = 20;
  id: 1;
  name: string;
  totalCaHt: 12000;
  comment: string;

  constructor(obj?: Partial<Client>) {
    if(obj) {
      Object.assign(this, obj);
    }
  }

}
