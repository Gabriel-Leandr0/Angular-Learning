import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
})
export class FormularioContatoComponent {
  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      nascimento: new FormControl('', Validators.required),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  SalvarContato() {
    
    if (this.contatoForm.invalid) {
      console.log("Formulário inválido");
      return;
    }
    console.log(this.contatoForm.value);
  }
  Cancelar() {
    console.log("Cancelado");
  }
  
}
