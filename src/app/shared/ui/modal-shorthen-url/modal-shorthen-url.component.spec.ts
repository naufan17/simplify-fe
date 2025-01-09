import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalShorthenUrlComponent } from './modal-shorthen-url.component';

describe('ModalShorthenUrlComponent', () => {
  let component: ModalShorthenUrlComponent;
  let fixture: ComponentFixture<ModalShorthenUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalShorthenUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalShorthenUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
