import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoConsultarComponent } from './agendamento-consultar.component';

describe('AgendamentoConsultarComponent', () => {
  let component: AgendamentoConsultarComponent;
  let fixture: ComponentFixture<AgendamentoConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
