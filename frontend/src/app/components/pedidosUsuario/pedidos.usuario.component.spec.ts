import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosUsuarioComponent } from './pedidos.usuario.component';

describe('PedidosUsuarioComponent', () => {
  let component: PedidosUsuarioComponent;
  let fixture: ComponentFixture<PedidosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
