import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from 'src/app/professores/professores.component';
import { ProfessorDetalheComponent } from 'src/app/professores/professor-detalhe/professor-detalhe.component';
import { AlunosComponent } from 'src/app/alunos/alunos.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { PerfilComponent } from 'src/app/perfil/perfil.component';


const routes: Routes = [
  { path: 'alunos', component: AlunosComponent },
  { path: 'alunos/:id', component: AlunosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'professores', component: ProfessoresComponent },
  { path: 'professor/:id', component: ProfessorDetalheComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
