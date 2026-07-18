import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-timeline-element',
  imports: [NgOptimizedImage],
  templateUrl: './timeline-element.html',
  styleUrl: './timeline-element.css',
})
export class TimelineElement {
  @Input({ required: true }) year!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) summary!: string;
  @Input() logo?: string;
}
