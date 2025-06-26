import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirNome } from './exibir-nome';

describe('ExibirNome', () => {
  let component: ExibirNome;
  let fixture: ComponentFixture<ExibirNome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirNome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirNome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
