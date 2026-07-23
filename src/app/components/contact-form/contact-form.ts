import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

  email = signal('');

  emailChanged(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.email.set(input.value);
}


  emailIsValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
}
