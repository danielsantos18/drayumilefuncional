import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-card.component.html',
  styleUrl: './author-card.component.scss'
})
export class AuthorCardComponent {
  @Input() avatar = 'images/perfil2.jpeg';
  @Input() name = 'Dra. Yumile Florián Páez';
  @Input() role = 'Especialista en Medicina Familiar Integral · Cardiosalud';
  @Input() bio = 'Apasionada por la prevención cardiovascular y la educación en salud. Promueve un estilo de vida saludable y personalizado.';
}

