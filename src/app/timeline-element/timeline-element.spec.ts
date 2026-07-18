import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineElement } from './timeline-element';

describe('TimelineElement', () => {
  let component: TimelineElement;
  let fixture: ComponentFixture<TimelineElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineElement],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineElement);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('year', '2026');
    fixture.componentRef.setInput('title', 'Test');
    fixture.componentRef.setInput('summary', 'Test summary');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
