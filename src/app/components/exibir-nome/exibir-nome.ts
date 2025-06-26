import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exibir-nome',
  imports: [CommonModule],
  templateUrl: './exibir-nome.html',
  styleUrl: './exibir-nome.css',
  standalone: true
})
export class ExibirNome {
  @Input() name: string = 'Francisco';
  nomeUsuario: string = 'Francisco Neto';
}
