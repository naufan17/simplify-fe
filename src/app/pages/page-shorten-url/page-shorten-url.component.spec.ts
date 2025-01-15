import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShortenUrlComponent } from './page-shorten-url.component';

describe('PageShortenUrlComponent', () => {
  let component: PageShortenUrlComponent;
  let fixture: ComponentFixture<PageShortenUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageShortenUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageShortenUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
