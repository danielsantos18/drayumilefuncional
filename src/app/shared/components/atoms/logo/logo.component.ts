import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input() logoSrc = 'images/new-logo-light-blue.jpeg';
  @Input() altText = 'Logo Dra. Yumile Florián Páez';
  @Input() titleText = 'Dra.Yumile Florián Páez';
  @Input() linkUrl = '/';
}

