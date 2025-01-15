import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQrcodeComponent } from './page-qrcode.component';

describe('PageQrcodeComponent', () => {
  let component: PageQrcodeComponent;
  let fixture: ComponentFixture<PageQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageQrcodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
