import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SocialIconComponent } from '../../atoms/social-icon/social-icon.component';

export interface SocialNetwork {
  name: string;
  icon: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-social-group',
  standalone: true,
  imports: [CommonModule, SocialIconComponent],
  templateUrl: './social-group.component.html',
  styleUrl: './social-group.component.scss'
})
export class SocialGroupComponent {
  @Input() networks: SocialNetwork[] = [
    {
      name: 'LinkedIn',
      icon: 'bi bi-linkedin',
      url: 'https://www.linkedin.com/in/yumile-florian-paez-037763303?trk=contact-info',
      color: '#0077b5'
    },
    {
      name: 'Instagram',
      icon: 'bi bi-instagram',
      url: 'https://www.instagram.com/dra.yumileflorian/',
      color: '#e1306c'
    },
    {
      name: 'WhatsApp',
      icon: 'bi bi-whatsapp',
      url: 'https://wa.me/573227179819',
      color: '#25D366'
    }
  ];
}

