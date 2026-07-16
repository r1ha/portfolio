import { Component } from '@angular/core';
import { PersonalCard } from '../personal-card/personal-card';
import { Timeline } from "../timeline/timeline";

@Component({
  selector: 'app-about-section',
  imports: [PersonalCard, Timeline],
  template: `
    <div class="flex flex-col items-center gap-5">
      <app-personal-card
        [portraitPath]="'assets/pictures/portrait.jpg'"
        [yourName]="'Erwan Achat'"
        [yourJob]="'Software Engineer'"
        [linkedInLink]="'https://www.linkedin.com/in/erwan-achat-069311233/'"
        [email]="'erwan.achat@yahoo.com'"
      ></app-personal-card>

      <div class="flex flex-col">
        <h2>Construire des expériences web lisibles, rapides et utiles.</h2>
        <p>
          Je conçois des interfaces portfolio qui vont droit au but: une histoire claire, des
          contenus faciles à parcourir et une base technique propre pour évoluer.
        </p>
      </div>

      <app-timeline></app-timeline>
    </div>


  `,
})
export class AboutSection {
  protected readonly focusPoints = [
    'Navigation simple et directe',
    'Contenus clairs et hiérarchisés',
    'Base Angular facile à faire évoluer',
  ];
}
