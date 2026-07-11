import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  imports: [NgOptimizedImage],
  templateUrl: './personal-card.html',
  styleUrl: './personal-card.css',
})
export class PersonalCard {
  @Input() portraitPath!: string;
}