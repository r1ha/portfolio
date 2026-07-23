import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_SECTIONS } from '../../info/section-info';
import { NgOptimizedImage } from '@angular/common';
import { PERSONAL_INFO } from '../../info/personal-info';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly navSections = inject(NAV_SECTIONS);
  protected readonly personalInfo = inject(PERSONAL_INFO);
  
}
