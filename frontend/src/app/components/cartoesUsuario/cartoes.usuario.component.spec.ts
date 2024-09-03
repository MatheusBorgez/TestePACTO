import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoesUsuarioComponent } from './cartoes.usuario.component';

describe('CartoesUsuarioComponent', () => {
  let component: CartoesUsuarioComponent;
  let fixture: ComponentFixture<CartoesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartoesUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartoesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
