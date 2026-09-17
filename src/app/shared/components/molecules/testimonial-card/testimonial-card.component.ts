import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface PatientTestimonial {
  authorName: string;
  authorAvatar?: string;
  rating: number; // e.g. 5
  dateText: string;
  comment: string;
  treatmentOrCondition?: string;
  googleReviewUrl?: string;
}

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {
  @Input({ required: true }) testimonial!: PatientTestimonial;

  get stars(): number[] {
    return Array(this.testimonial.rating || 5).fill(0);
  }
}

