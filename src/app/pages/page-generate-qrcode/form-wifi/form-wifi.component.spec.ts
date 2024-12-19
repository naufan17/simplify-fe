import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWifiComponent } from './form-wifi.component';

describe('FormWifiComponent', () => {
  let component: FormWifiComponent;
  let fixture: ComponentFixture<FormWifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWifiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
