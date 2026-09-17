import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { AcademicCardComponent } from '../../molecules/academic-card/academic-card.component';

export interface AcademicCredential {
  image: string;
  title: string;
  delay: number;
  isSanMartin?: boolean;
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, AcademicCardComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  academicCredentials: AcademicCredential[] = [
    {
      image: 'images/acade2.png',
      title: '🧬 Especialista en Medicina Familiar Integral <br>',
      delay: 0
    },
    {
      image: 'images/acade3.png',
      title: '🌱 Formación en Medicina Funcional<br>',
      delay: 0
    },
    {
      image: 'images/acade5.png',
      title: '💊 Medicina Integrativa, Bases homeopáticas y Biorregulación de Sistemas<br>',
      delay: 100
    },
    {
      image: 'images/acade4.png',
      title: '🧬 Máster en Infecciones y Tratamiento Antibiótico Avanzado<br>',
      delay: 200
    },
    {
      image: 'images/acade1.png',
      title: '👩‍⚕️ Medicina Y Cirugía<br>',
      delay: 300,
      isSanMartin: true
    }
  ];

  scrollToServices(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

