import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timeline } from './timeline';
import { TIMELINE_INFO } from '../info/timeline-info';

describe('Timeline', () => {
  let component: Timeline;
  let fixture: ComponentFixture<Timeline>;

  beforeAll(() => {
    class MockObserver {
      readonly root: Element | Document | null = null;
      readonly rootMargin: string = '';
      readonly thresholds: ReadonlyArray<number> = [];
      readonly scrollMargin: string = '';
      constructor(
        private callback: IntersectionObserverCallback,
        _options?: IntersectionObserverInit,
      ) {}
      observe(_target: Element) {
        this.callback([], this as unknown as IntersectionObserver);
      }
      unobserve(_target: Element) {}
      disconnect() {}
      takeRecords(): IntersectionObserverEntry[] {
        return [];
      }
    }
    globalThis.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver;
  });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [Timeline],
      providers: [
        { provide: TIMELINE_INFO, useValue: [] },
      ],
    });
    await TestBed.compileComponents();

    fixture = TestBed.createComponent(Timeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
