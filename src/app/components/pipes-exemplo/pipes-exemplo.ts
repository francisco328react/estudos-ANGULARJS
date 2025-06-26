import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes-exemplo',
  imports: [CommonModule],
  templateUrl: './pipes-exemplo.html',
  styleUrl: './pipes-exemplo.css'
})
export class PipesExemplo {
  name = 'Francisco Neto';
  dataHoje = new Date();
  valor = 132.75;
}
