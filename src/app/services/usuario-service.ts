import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  obterUsusario() {
    return ["Francisco", "Waldenice", "Beatriz", "Theilon"];
  }
}
