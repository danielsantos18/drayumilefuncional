import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-academic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academic-card.component.html',
  styleUrl: './academic-card.component.scss'
})
export class AcademicCardComponent {
  @Input({ required: true }) image!: string;
  @Input({ required: true }) title!: string;
  @Input() delay = 0;
  @Input() isSanMartin = false;
  @Input() aosAnimation = 'zoom-in';
}

