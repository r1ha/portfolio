import { Component, inject, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TIMELINE_INFO } from '../info/timeline-info';
import { TimelineElement } from '../timeline-element/timeline-element';

@Component({
  selector: 'app-timeline',
  imports: [TimelineElement],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline implements AfterViewInit {
  protected readonly entries = inject(TIMELINE_INFO);

  @ViewChildren('timelineItem', { read: ElementRef })
  private itemRefs!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('tl-item--animate');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    for (const ref of this.itemRefs) {
      observer.observe(ref.nativeElement);
    }
  }
}
