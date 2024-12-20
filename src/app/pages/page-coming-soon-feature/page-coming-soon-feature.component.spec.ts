import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComingSoonFeatureComponent } from './page-coming-soon-feature.component';

describe('PageComingSoonFeatureComponent', () => {
  let component: PageComingSoonFeatureComponent;
  let fixture: ComponentFixture<PageComingSoonFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageComingSoonFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageComingSoonFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
