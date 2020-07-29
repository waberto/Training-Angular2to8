import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public item = new Client();
  constructor(
    private os: ClientsService,
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  public addItem(item: Client) {
    this.os.addItem(item).subscribe((res) => {
      this.router.navigate(['clients']);
    });
  }

}
