# Aula de Angular
* Fundamentos
  - Instalação do Angular CLI
  - Criação de projeto com Angular standalone (Angular 17+)<br>
  - Estrutura de pastas e arquivos principais<br>
* Componentes
  - Criação de componentes standalone (@Component({ standalone: true }))
  - Uso do selector, templateUrl, styleUrl e imports
  - Comunicação entre componentes pai e filho com @Input()
  - Organização modular com componentes separados em /components
* Data Binding
  - Interpolação ({{ }})
  - Property binding ([property]="...")
  - Event binding ((event)="...")
  - Two-way binding com [(ngModel)]
* Diretivas
  - @If para renderização condicional
  - @For
  - Criando botões para alternar visibilidade
* Serviços e HTTP
  - Criação de serviços com @Injectable
  - Injeção de dependência com constructor(private service: ApiService)
  - Uso do HttpClientModule com provideHttpClient()
  - Consumo de API pública (JSONPlaceholder)
* Rotas
  - Criação de rotas no app.routes.ts
  - Roteamento dinâmico com parâmetros (/usuario/:id)
  - Uso de <router-outlet> e routerLink
* Pipes
  - Uso de pipes nativos (date, currency, uppercase, lowercase)
  - Criação de pipe personalizado (inverter.pipe.ts)
  - Uso de pipe personalizado no template

<hr>

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```
## Running end-to-end tests
For end-to-end (e2e) testing, run:

```bash
ng e2e
```
Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

