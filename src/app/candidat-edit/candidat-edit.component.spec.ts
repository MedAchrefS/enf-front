import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatEditComponent } from './candidat-edit.component';

describe('CandidatEditComponent', () => {
  let component: CandidatEditComponent;
  let fixture: ComponentFixture<CandidatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
