import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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

  public professores = [
    { id:1,  nome: "Robert", disciplina:  "Sociologia"},
  { id:2,  nome: "João", disciplina:  "Fisica"},
  { id:3,  nome:"Ryan",disciplina:  "Matemática"},
  { id:4,  nome: "Gabriel", disciplina:  "História"},
  { id:5,  nome: "Eduardo", disciplina:  "Quimica"},
  { id:6,  nome: "Luci", disciplina:  "Educação Fisica"},
  ]
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(private sb : FormBuilder,private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit() {
  }


  criarForm() {
    this.professorForm = this.sb.group({
      nome: ['',Validators.required],
      disciplina : ['',Validators.required]
    });
  }
  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor)
  }
  professorSubmit() {
    console.log(this.professorForm.value)
  }

}
