import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUsuarios } from './api-usuarios';

describe('ApiUsuarios', () => {
  let component: ApiUsuarios;
  let fixture: ComponentFixture<ApiUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiUsuarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUsuarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
