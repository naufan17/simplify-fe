import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUrlComponent } from './form-url.component';

describe('FormUrlComponent', () => {
  let component: FormUrlComponent;
  let fixture: ComponentFixture<FormUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
