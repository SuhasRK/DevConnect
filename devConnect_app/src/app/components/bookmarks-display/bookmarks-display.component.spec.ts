import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksDisplayComponent } from './bookmarks-display.component';

describe('BookmarksDisplayComponent', () => {
  let component: BookmarksDisplayComponent;
  let fixture: ComponentFixture<BookmarksDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarksDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarksDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
