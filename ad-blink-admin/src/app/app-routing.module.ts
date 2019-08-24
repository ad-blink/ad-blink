import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdvertCreateComponent } from './components/advert-create/advert-create.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';

const routes: Routes = [
  { component: DashboardComponent, path: "dashboard" },
  { component: AdvertCreateComponent, path: "adverts/create" },
  { component: ClientRegisterComponent, path: "clients/register" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
