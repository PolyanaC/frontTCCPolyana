import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cadastro } from 'src/app/models/cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  creds: Cadastro = {
    nome: '',
    email:'',
    senha:''
    }

  //Validators.email valida se o valor recebido do input é um tipo e-mail
  nome = new FormControl(null, Validators.minLength(3));
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.toast.error('Usuario e/ou senha inválidos', 'Erro de login');
    this.creds.senha = '';
  }

  validaCampos(): boolean{
    if(this.nome.valid && this.email.valid && this.senha.valid){
      return true;
    } else {
      return false;
    }
  }

}
