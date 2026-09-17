import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCardComponent, MedicalService } from '../../molecules/service-card/service-card.component';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';

export interface PartnerLab {
  name: string;
  image: string;
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, SectionTitleComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  services: MedicalService[] = [
    {
      icon: 'bi bi-stars text-warning',
      title: 'Consulta Inicial (Encuentro de Transformación)',
      description: 'Exploración profunda para comprender tu historia de salud y diseñar un plan personalizado de sanación.',
      details: [
        'Historia clínica detallada (inlcuso desde antes del nacimiento).',
        'Línea del tiempo de eventos clave.',
        'Revisión funcional de exámenes previos.',
        'Examen físico y antropometría.',
        'Análisis de posibles disfunciones',
        'Diseño de plan personalizado con alimentación, estilo de vida y suplementación.'
      ]
    },
    {
      icon: 'bi bi-bullseye text-danger',
      title: 'Consulta de Control (Seguimiento)',
      description: 'Evaluación del progreso y ajuste del plan de bienestar.',
      details: [
        'Revisión de resultados de exámenes.',
        'Confirmacion de disfunciones',
        'Ajustes personalizados del plan de sanación.',
        'Establecimiento de pasos de seguimiento.'
      ]
    },
    {
      icon: 'bi bi-eyedropper text-black',
      title: 'Exámenes Funcionales Avanzados',
      description: 'Trabajamos con laboratorios nacionales e internacionales para obtener una visión profunda de tu salud.',
      details: [
        'Panel bioquímico simple y avanzado.',
        'Perfiles cardiometabólicos y hormonales.',
        'Pruebas de aliento de SIBO, H. pylori.',
        'Estudios de microbiota.',
        'Test de cortisol.',
        'Acidos Organicos.',
        'Metales pesados.'
      ]
    }
  ];

  labs: PartnerLab[] = [
    { name: 'Hormonal', image: 'images/lab fix.png' },
    { name: 'Enlace Lab', image: 'images/enlace-lab.png' },
    { name: 'Synlab', image: 'images/lab5.png' },
    { name: 'Isomed', image: 'images/lab1.png' },
    { name: 'Diagnostic Solutions', image: 'images/lab2.png' },
    { name: 'Precision Analitics', image: 'images/lab3.png' },
    { name: 'Mosaic Diagnostics', image: 'images/lab4.png' }
  ];

  // Lista duplicada para garantizar un ciclo de marquee infinito y continuo sin cortes
  marqueeLabs: PartnerLab[] = [
    ...this.labs,
    ...this.labs,
    ...this.labs,
    ...this.labs
  ];
}
