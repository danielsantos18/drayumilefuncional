import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface MedicalService {
  icon: string;
  title: string;
  description: string;
  details?: string[];
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: MedicalService;
  @Input() delay = 150;
  @Input() aosAnimation = 'fade-up';
}

