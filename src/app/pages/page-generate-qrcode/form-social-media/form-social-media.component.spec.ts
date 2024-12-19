import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSocialMediaComponent } from './form-social-media.component';

describe('FormSocialMediaComponent', () => {
  let component: FormSocialMediaComponent;
  let fixture: ComponentFixture<FormSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSocialMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
