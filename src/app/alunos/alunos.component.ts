import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/aluno';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector:'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef?: BsModalRef;
  public alunoForm : FormGroup;
  public titulo = "Alunos";
  public alunoSelecionado: Aluno;


  public alunos = [
  { id:1,  nome: "Marta", sobrenome:  "kent",  telefone:33225555},
  { id:2,  nome: "Paula", sobrenome:  "Tavernier",  telefone:33225644},
  { id:3,  nome:"Roberta",sobrenome:  "Andrade",  telefone:33225733},
  { id:4,  nome: "Pedro", sobrenome:  "Antonio",  telefone:33225822},
  { id:5,  nome: "Paulo", sobrenome:  "José",  telefone:33225911},
  { id:6,  nome: "Lucas", sobrenome:  "Lutf",  telefone:332250},
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb:FormBuilder,private modalService: BsModalService)

  {
    this.criarForm();
  }

  ngOnInit(){

  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['',Validators.required],
      sobrenome : ['',Validators.required],
      telefone: ['',Validators.required]
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno)
  }
  alunoSubmit() {
    console.log(this.alunoForm.value)
  }

}
