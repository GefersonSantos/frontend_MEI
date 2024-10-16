import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendasComponent } from './listar-agendas.component';

describe('ListarAgendasComponent', () => {
  let component: ListarAgendasComponent;
  let fixture: ComponentFixture<ListarAgendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAgendasComponent]
    });
    fixture = TestBed.createComponent(ListarAgendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
