import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_SECTIONS } from '../../info/section-info';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly navSections = inject(NAV_SECTIONS);
}
