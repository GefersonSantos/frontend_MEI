import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAgendamentoComponent } from './alterar-agendamento.component';

describe('AlterarAgendamentoComponent', () => {
  let component: AlterarAgendamentoComponent;
  let fixture: ComponentFixture<AlterarAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarAgendamentoComponent]
    });
    fixture = TestBed.createComponent(AlterarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
