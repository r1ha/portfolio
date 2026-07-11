import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly navItems = [
    { label: 'A propos', path: '/a-propos' },
    { label: 'Expériences', path: '/experiences' },
    { label: 'Compétences', path: '/competences' },
  ];
}
