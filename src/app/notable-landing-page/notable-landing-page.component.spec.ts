import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotableLandingPageComponent } from './notable-landing-page.component';

describe('NotableLandingPageComponent', () => {
  let component: NotableLandingPageComponent;
  let fixture: ComponentFixture<NotableLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotableLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotableLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
