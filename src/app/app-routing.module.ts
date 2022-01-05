import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ArtigoListComponent } from './components/post/artigo-list/artigo-list.component';

const routes: Routes = [

  
  {path:'cadastro', component: CadastroComponent},
  {path:'login', component: LoginComponent},
  
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component:HomeComponent},
      {path: 'artigos', component:ArtigoListComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
