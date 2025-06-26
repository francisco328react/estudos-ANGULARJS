import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  imports: [CommonModule],
  templateUrl: './diretivas.html',
  styleUrl: './diretivas.css',
  standalone: true
})
export class Diretivas {
  showMensage = true;

  listNames: string[] = ["Francisco", "Alessandra", "Nice"];

  statusUser = '';
}
