import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaComponent } from './wviews/sistema/sistema.component';
import { HomeComponent } from './wviews/home/home.component';
import { SistemaCreateComponent } from './views/sistema/sistema-create/sistema-create.component';
import { HistoricoPesquisarComponent } from './views/sistema/historico-pesquisar/historico-pesquisar.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent

  },{ 
    path: "sistema",
    component: SistemaComponent
  },{
    path: "views/sistema/sistema-create",
    component: SistemaCreateComponent
  },{
    path: "views/sistema/historico-pesquisar",
    component: HistoricoPesquisarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
