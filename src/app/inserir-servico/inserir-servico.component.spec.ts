import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirServicoComponent } from './inserir-servico.component';

describe('InserirServicoComponent', () => {
  let component: InserirServicoComponent;
  let fixture: ComponentFixture<InserirServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirServicoComponent]
    });
    fixture = TestBed.createComponent(InserirServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
