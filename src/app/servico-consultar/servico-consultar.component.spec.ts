import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoConsultarComponent } from './servico-consultar.component';

describe('ServicoConsultarComponent', () => {
  let component: ServicoConsultarComponent;
  let fixture: ComponentFixture<ServicoConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
