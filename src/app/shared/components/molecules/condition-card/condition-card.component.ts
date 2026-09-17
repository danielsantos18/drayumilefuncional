import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface MedicalCondition {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-condition-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './condition-card.component.html',
  styleUrl: './condition-card.component.scss'
})
export class ConditionCardComponent {
  @Input({ required: true }) condition!: MedicalCondition;
  @Input() extraMarginTitle = false;
  @Input() flowerImage = 'images/flor.png';
}

