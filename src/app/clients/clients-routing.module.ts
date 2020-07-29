import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

const routes: Routes = [
  { path: '', component: PageClientsComponent },
  { path: 'add', component: PageAddClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
