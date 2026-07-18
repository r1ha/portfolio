import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.html',
  styleUrl: './skill-icon.css',
})
export class SkillIcon {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() xp: number = 0;

  get size(): number {
    return 40 + (this.xp / 100) * 80;
  }
}
