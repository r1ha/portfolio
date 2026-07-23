import { Component, computed, signal } from '@angular/core';

const LS_PREFIX = 'contact-form-';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  name = signal(localStorage.getItem(LS_PREFIX + 'name') ?? '');
  email = signal(localStorage.getItem(LS_PREFIX + 'email') ?? '');
  message = signal(localStorage.getItem(LS_PREFIX + 'message') ?? '');

  nameChanged(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
    localStorage.setItem(LS_PREFIX + 'name', input.value);
  }

  emailChanged(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.email.set(input.value);
    localStorage.setItem(LS_PREFIX + 'email', input.value);
  }

  messageChanged(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.message.set(textarea.value);
    localStorage.setItem(LS_PREFIX + 'message', textarea.value);
  }

  nameIsValid = (name: string): boolean => name.trim().length > 0;

  emailIsValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  messageIsValid = (message: string): boolean => message.trim().length > 0;

  formValid = computed(
    () =>
      this.nameIsValid(this.name()) &&
      this.emailIsValid(this.email()) &&
      this.messageIsValid(this.message()),
  );

  formMessage = computed(() => {
    const issues: string[] = [];

    if (!this.nameIsValid(this.name())) {
      issues.push('votre nom');
    }
    if (!this.emailIsValid(this.email())) {
      issues.push('un email valide');
    }
    if (!this.messageIsValid(this.message())) {
      issues.push('votre message');
    }

    return `Il me faut encore : ${issues.join(', ')}.`;
  });
}
