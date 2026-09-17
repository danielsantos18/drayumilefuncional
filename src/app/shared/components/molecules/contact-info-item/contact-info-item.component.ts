import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-info-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info-item.component.html',
  styleUrl: './contact-info-item.component.scss'
})
export class ContactInfoItemComponent {
  @Input({ required: true }) iconClass!: string;
  @Input({ required: true }) title!: string;
  @Input() iconVariant: 'orange' | 'blue' = 'orange';
}

