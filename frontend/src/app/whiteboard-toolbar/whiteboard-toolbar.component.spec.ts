import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardToolbarComponent } from './whiteboard-toolbar.component';

describe('WhiteboardToolbarComponent', () => {
  let component: WhiteboardToolbarComponent;
  let fixture: ComponentFixture<WhiteboardToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiteboardToolbarComponent]
    });
    fixture = TestBed.createComponent(WhiteboardToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
