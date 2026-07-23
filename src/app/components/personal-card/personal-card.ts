import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PERSONAL_INFO } from '../../info/personal-info';

@Component({
  selector: 'app-personal-card',
  imports: [NgOptimizedImage],
  templateUrl: './personal-card.html',
  styleUrl: './personal-card.css',
})
export class PersonalCard {
  protected readonly personalInfo = inject(PERSONAL_INFO);
}