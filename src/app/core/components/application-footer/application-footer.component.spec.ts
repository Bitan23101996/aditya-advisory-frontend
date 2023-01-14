import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFooterComponent } from './application-footer.component';

describe('ApplicationFooterComponent', () => {
  let component: ApplicationFooterComponent;
  let fixture: ComponentFixture<ApplicationFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
