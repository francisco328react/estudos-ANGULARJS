import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  valor = 0;

  constructor() { }

  decrementar() {
    this.valor--;
  }

  incrementar() {
    this.valor++;
  }

  zerar() {
    this.valor = 0;
  }
}
