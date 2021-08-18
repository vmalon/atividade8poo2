import { Router } from '@angular/router';
import { AlunoService } from './aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';
import { MatRadioModule } from '@angular/material/radio';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})
export class AlunoNovoComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    
  }

  salvar() {
    const data = new Date(this.aluno.dt_nasc.toString());
    // const dataFormatada = data.toISOString().split('T')[0];

    //this.aluno.dt_nasc = data.toLocaleDateString();
    console.log(this.aluno.dt_nasc);
    this.alunoService.createAluno(this.aluno)
      .subscribe(
        dado => {
          this.alunoService.openSnackBar('Aluno criado com sucesso !');
          this.router.navigate(['/alunos']);
        }
      )
  }

  cancelar() {
    this.router.navigate(['/alunos']);
  }

}
