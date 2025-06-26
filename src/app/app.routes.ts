import { Routes } from '@angular/router';
import { Saudacao } from './components/saudacao/saudacao';
import { DataBinding } from './components/data-binding/data-binding';
import { Diretivas } from './components/diretivas/diretivas';
import { Usuario } from './components/usuario/usuario';
import { ApiUsuarios } from './components/api-usuarios/api-usuarios';
import { Contador } from './components/contador/contador';
import { ExibirNome } from './components/exibir-nome/exibir-nome';
import { PipesExemplo } from './components/pipes-exemplo/pipes-exemplo';

export const routes: Routes = [
    { path: '', redirectTo: 'saudacao', pathMatch: 'full' },
    { path: 'saudacao', component: Saudacao },
    { path: 'data-binding', component: DataBinding },
    { path: 'diretivas', component: Diretivas },
    { path: 'usuario', component: Usuario },
    { path: 'api-usuarios', component: ApiUsuarios },
    {
        path: 'usuario/:id',
        loadComponent: () => import('./components/usuario/usuario').then(m => m.Usuario)
    },
    { path: 'contador', component: Contador },
    { path: 'exibir-nome', component: ExibirNome },
    { path: 'pipes', component: PipesExemplo },
];
