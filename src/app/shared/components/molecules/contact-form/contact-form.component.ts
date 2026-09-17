import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  };

  @Output() formSubmit = new EventEmitter<ContactFormData>();

  onSubmit(): void {
    this.formSubmit.emit({ ...this.formData });
  }
}

