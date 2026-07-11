import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    protected readonly navItems = [
    { label: 'A propos', path: '/home' },
    { label: 'Expériences', path: '/experiences' },
    { label: 'Compétences', path: '/skills' },
  ];
}
