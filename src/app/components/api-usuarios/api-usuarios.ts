import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../../services/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-usuarios',
  imports: [RouterModule],
  templateUrl: './api-usuarios.html',
  styleUrl: './api-usuarios.css'
})
export class ApiUsuarios implements OnInit {
  usuarios: any[] = [];
  carregando = true;

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getUsusarios().subscribe({
      next: (dados) => {
        this.usuarios = dados;
        this.carregando = false;
      },
      error: (error) => {
        console.error("Erro ao buscar usuarios", error);
        this.carregando = false;
      }
    })
  }
}
