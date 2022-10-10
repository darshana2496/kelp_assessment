import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableCommentsComponent } from './editable-comments.component';

describe('EditableCommentsComponent', () => {
  let component: EditableCommentsComponent;
  let fixture: ComponentFixture<EditableCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
