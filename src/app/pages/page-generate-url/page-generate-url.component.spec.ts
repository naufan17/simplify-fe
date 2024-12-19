import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenerateUrlComponent } from './page-generate-url.component';

describe('PageGenerateUrlComponent', () => {
  let component: PageGenerateUrlComponent;
  let fixture: ComponentFixture<PageGenerateUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGenerateUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGenerateUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
