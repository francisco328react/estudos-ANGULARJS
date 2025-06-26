import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExemplo } from './pipes-exemplo';

describe('PipesExemplo', () => {
  let component: PipesExemplo;
  let fixture: ComponentFixture<PipesExemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesExemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesExemplo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
