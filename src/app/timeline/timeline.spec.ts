import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TIMELINE_SECTIONS } from '../info/timeline-info';
import { Timeline } from './timeline';

describe('Timeline', () => {
  let component: Timeline;
  let fixture: ComponentFixture<Timeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timeline],
      providers: [{ provide: TIMELINE_SECTIONS, useValue: [] }],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
