import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [PageClientsComponent],
  imports: [
  CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
