import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from 'src/app/alunos/alunos.component';
import { AlunosProfessoresComponent } from 'src/app/professores/alunos-professores/alunos-professores.component';
import { ProfessoresComponent } from 'src/app//professores/professores.component';
import { ProfessoresAlunosComponent } from 'src/app/alunos/professores-alunos/professores-alunos.component';
import { ProfessorDetalheComponent } from 'src/app/professores/professor-detalhe/professor-detalhe.component';
import { PerfilComponent } from 'src/app/perfil/perfil.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { NavComponent } from 'src/app/nav/nav.component';
import { TituloComponent } from 'src/app/titulo/titulo.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
   declarations: [
      AppComponent,
      AlunosComponent,
      AlunosProfessoresComponent,
      ProfessoresComponent,
      ProfessoresAlunosComponent,
      ProfessorDetalheComponent,
      PerfilComponent,
      DashboardComponent,
      NavComponent,
      TituloComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      ModalModule.forRoot(),
      HttpClientModule,
      NgxSpinnerModule,
      ToastrModule.forRoot({
        timeOut: 3500,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        progressBar: true,
        closeButton: true
      })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
