import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWhatsappComponent } from './form-whatsapp.component';

describe('FormWhatsappComponent', () => {
  let component: FormWhatsappComponent;
  let fixture: ComponentFixture<FormWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWhatsappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
