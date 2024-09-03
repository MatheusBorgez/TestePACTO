import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsBoletoComponent } from './fields-boleto.component';

describe('FieldsBoletoComponent', () => {
  let component: FieldsBoletoComponent;
  let fixture: ComponentFixture<FieldsBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldsBoletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
