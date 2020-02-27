import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { EmailListComponent } from './menu/email-list/email-list.component';
import { EmailComponent } from './menu/email-list/email/email.component';

const routes: Routes = [
  //Redireciona o caminho principal para o /menu
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  //Estabelece as rotas do menu e suas rotas filhas
  { path: 'menu', component: MenuComponent, 
    children: [{
      path: 'email-list', component: EmailListComponent, 
      children: [{
        path: 'email', component: EmailComponent
      }]
    }]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
