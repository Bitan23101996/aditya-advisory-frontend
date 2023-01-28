import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnuiryFormComponent } from './enuiry-form.component';

describe('EnuiryFormComponent', () => {
  let component: EnuiryFormComponent;
  let fixture: ComponentFixture<EnuiryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnuiryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnuiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
