import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedBrandComponent } from './trusted-brand.component';

describe('TrustedBrandComponent', () => {
  let component: TrustedBrandComponent;
  let fixture: ComponentFixture<TrustedBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
