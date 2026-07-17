import { Component, inject } from '@angular/core';
import { PERSONAL_INFO } from '../info/personal-info';
import {Icon} from "../icon/icon";

@Component({
  selector: 'app-icon-set',
  imports: [Icon],
  templateUrl: './icon-set.html',
  styleUrl: './icon-set.css',
})
export class IconSet {
  protected readonly personalInfo = inject(PERSONAL_INFO);
}
