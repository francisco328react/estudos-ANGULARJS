import { Component, OnInit, Inject, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class Usuario implements OnInit {
  usuarios: string[] = [];
  
  private route = inject(ActivatedRoute);
  id: string | null = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.obterUsusario();
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
