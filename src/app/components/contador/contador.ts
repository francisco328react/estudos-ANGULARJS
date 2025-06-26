import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorService } from '../../services/contador-service';

@Component({
  selector: 'app-contador',
  imports: [CommonModule],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {
  constructor(public contador: ContadorService) {}
}
