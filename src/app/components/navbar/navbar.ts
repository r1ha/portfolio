import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    protected readonly navItems = [
    { label: 'À propos', path: '/home' },
    { label: 'Expérience', path: '/experiences' },
    { label: 'Contact', path: '/contact' },
  ];
}
