import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenerateQrcodeComponent } from './page-generate-qrcode.component';

describe('PageGenerateQrcodeComponent', () => {
  let component: PageGenerateQrcodeComponent;
  let fixture: ComponentFixture<PageGenerateQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGenerateQrcodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGenerateQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
