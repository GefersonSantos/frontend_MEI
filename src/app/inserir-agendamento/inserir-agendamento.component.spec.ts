import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAgendamentoComponent } from './inserir-agendamento.component';

describe('InserirAgendamentoComponent', () => {
  let component: InserirAgendamentoComponent;
  let fixture: ComponentFixture<InserirAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirAgendamentoComponent]
    });
    fixture = TestBed.createComponent(InserirAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
