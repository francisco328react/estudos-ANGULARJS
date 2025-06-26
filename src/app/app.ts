import { Component } from '@angular/core';

import { Saudacao } from "./components/saudacao/saudacao";
import { DataBinding } from "./components/data-binding/data-binding";
import { Diretivas } from "./components/diretivas/diretivas";
import { Usuario } from "./components/usuario/usuario";

import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiUsuarios } from "./components/api-usuarios/api-usuarios";
import { ExibirNome } from './components/exibir-nome/exibir-nome';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Saudacao,
    DataBinding,
    Diretivas,
    Usuario,
    CommonModule,
    FormsModule,
    ApiUsuarios,
    ExibirNome
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  nomeUsuario = '';
}
