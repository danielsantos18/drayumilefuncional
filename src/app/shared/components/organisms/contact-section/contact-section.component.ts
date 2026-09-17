import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';
import { ContactInfoItemComponent } from '../../molecules/contact-info-item/contact-info-item.component';
import { SocialGroupComponent } from '../../molecules/social-group/social-group.component';
import { ContactFormComponent, ContactFormData } from '../../molecules/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    ContactInfoItemComponent,
    SocialGroupComponent,
    ContactFormComponent
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  onFormSubmitted(data: ContactFormData): void {
    console.log('Formulario enviado:', data);
  }
}

