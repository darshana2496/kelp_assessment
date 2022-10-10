import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRowDetailComponent } from './candidate-row-detail.component';

describe('CandidateRowDetailComponent', () => {
  let component: CandidateRowDetailComponent;
  let fixture: ComponentFixture<CandidateRowDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateRowDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateRowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
