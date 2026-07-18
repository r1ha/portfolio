import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { TIMELINE_SECTIONS } from '../info/timeline-info';

@Component({
  selector: 'app-timeline',
  imports: [NgOptimizedImage],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  protected readonly sections = inject(TIMELINE_SECTIONS);
}
