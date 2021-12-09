import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalConsultarComponent } from './profissional-consultar.component';

describe('ProfissionalConsultarComponent', () => {
  let component: ProfissionalConsultarComponent;
  let fixture: ComponentFixture<ProfissionalConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionalConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
