import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightInfoComponent } from './right-info.component';

describe('RightInfoComponent', () => {
  let component: RightInfoComponent;
  let fixture: ComponentFixture<RightInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
