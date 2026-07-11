import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { PersonalCard } from '../personal-card/personal-card';

@Component({
  selector: 'app-about-section',
  imports: [PersonalCard],
  template: `
  
    <section class="section-panel" id="a-propos">
      <div class="section-kicker">A propos</div>

      <app-personal-card
        [portraitPath]="'assets/portrait.jpg'"
      ></app-personal-card>
      
      <div class="section-grid">
        <div class="section-copy">
          <h2>Construire des expériences web lisibles, rapides et utiles.</h2>
          <p>
            Je conçois des interfaces portfolio qui vont droit au but: une histoire claire,
            des contenus faciles à parcourir et une base technique propre pour évoluer.
          </p>
        </div>

        <aside class="section-card">
          <h3>Priorités</h3>
          <ul class="bullet-list">
            @for (point of focusPoints; track point) {
              <li>{{ point }}</li>
            }
          </ul>
        </aside>
      </div>
    </section>
    <div>
        
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
