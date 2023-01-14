import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaContactComponent } from './social-media-contact.component';

describe('SocialMediaContactComponent', () => {
  let component: SocialMediaContactComponent;
  let fixture: ComponentFixture<SocialMediaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
