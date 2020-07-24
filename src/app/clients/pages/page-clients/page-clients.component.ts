import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from './../../services/clients.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  public collection: Client[];
  public headers: string[];
  public states = Object.values(StateClient);
  constructor(private os: ClientsService) { }

  ngOnInit(): void {
    this.os.collection.subscribe(
      (datas) => {
        this.collection = datas;
      }
    );
    this.headers = [
      "name",
      "totalHt",
      "tva",  
      "totalTTC",
      "state"
    ];
  }
  
  public changeState(item: Client, event) {
    // console.log(item, event.target.value);
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public popup() {
    console.log('open popup');
  }
}
