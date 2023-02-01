import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public titulo = "Professores";
  public professorForm : FormGroup;

  public professorSelecionado: Professor;
  public modo= 'post';

  public professores : Professor  []

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(private sb : FormBuilder,private modalService: BsModalService,private professorService : ProfessorService) {
    this.criarForm();
  }

  ngOnInit() {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professorService.getAll().subscribe(
      (professores : Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  criarForm() {
    this.professorForm = this.sb.group({
      id : [''],
      nome: ['',Validators.required]
    });
  }
  salvarProfessor(professor : Professor) {
    if(professor.id !== 0) {
      this.modo = 'put'
    } else {
      this.modo = 'post'
    }
    (this.professorService as any)[this.modo](professor).subscribe(
      () => {
        console.log(professor)
        this.carregarProfessores();
      },
      (erro : any) => {
        console.log(erro);
      }
    );
  }
  professorSubmit() {
    this.salvarProfessor(this.professorForm.value)
  }
  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor)
  }

  professorNovo() {
    this.professorSelecionado = new  Professor();
    this.professorForm.patchValue(this.professorSelecionado)
  }

}
