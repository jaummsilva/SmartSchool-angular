import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlunoService } from '../services/aluno.service';

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
  public modo= 'post';


  public alunos : Aluno[];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb:FormBuilder,
    private modalService: BsModalService,
    private alunoService : AlunoService)

  {
    this.criarForm();
  }

  ngOnInit(){
    this.carregarAlunos();
  }
  carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos : Aluno[]) => {
        this.alunos = alunos;
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['',Validators.required],
      sobrenome : ['',Validators.required],
      telefone: ['',Validators.required]
    });
  }
  salvarAluno(aluno : Aluno) {
    if(aluno.id !== 0) {
      this.modo = 'put'
    } else {
      this.modo = 'post'
    }
    (this.alunoService as any)[this.modo](aluno).subscribe(
      () => {
        console.log(aluno)
        this.carregarAlunos();
      },
      (erro : any) => {
        console.log(erro);
      }
    );
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno)
  }
  alunoNovo() {
    this.alunoSelecionado = new  Aluno();
    this.alunoForm.patchValue(this.alunoSelecionado)
  }
  alunoSubmit() {
    this.salvarAluno(this.alunoForm.value);
  }

  deletarAluno(id:number) {
    this.alunoService.delete(id).subscribe(
        (model : any) => {
          console.log(model)
          this.carregarAlunos();
        },
        (erro : any) => {
          console.log(erro)
        }

    )
  }

}
