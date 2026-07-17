import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-icon',
  imports: [NgOptimizedImage],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() link: string = '';
}
