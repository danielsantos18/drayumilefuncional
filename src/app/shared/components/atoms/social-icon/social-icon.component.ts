import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-icon.component.html',
  styleUrl: './social-icon.component.scss'
})
export class SocialIconComponent {
  @Input() href = '#';
  @Input() iconClass = '';
  @Input() tooltipText = '';
  @Input() color = '#0077b5';
  @Input() target = '_blank';
}

