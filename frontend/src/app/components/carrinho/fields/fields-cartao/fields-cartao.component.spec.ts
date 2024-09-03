import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsCartaoComponent } from './fields-cartao.component';

describe('FieldsCartaoComponent', () => {
  let component: FieldsCartaoComponent;
  let fixture: ComponentFixture<FieldsCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldsCartaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldsCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
