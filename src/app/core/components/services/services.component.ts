import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  conditions = [
    {
      image: 'images/cardio8.png',
      title: 'Cardiometabólicas',
      description: 'Riesgo cardiovascular, Hipertensión arterial, Dislipidemia(Alteraciones del colesterol), Resitencia a la insulina, Prediabetes - Diabetes, Hígado graso, Sobrepeso, Obesidad e inflamación crónica.'
    },
    {
      image: 'images/digestivos7.png',
      title: 'Digestivas',
      description: 'Síndrome de Intestino Irritable, SIBO(sobrecrecimiento del intestino delgado), Disbiosis(desequilibrios de la microbiota), Estreñimiento - Diarrea, Gastritis - H. Pylori, Intolerancias digestivas, Déficit nutricional asociado.'
    },
    {
      image: 'images/hormonales2.png',
      title: 'Hormonales',
      description: 'Hipotiroidismo, Hashimoto, Tiroiditis, Transición Menopáusica, Menopausia.'
    },
    {
      image: 'images/oseo2.png',
      title: 'Osteoarticulares y Musculares',
      description: 'Artrosis, Atritis, Fibromialgia, Osteoporosis, Sarcopenia y Dolor crónico.'
    },
    {
      image: 'images/suenio.png',
      title: 'Sueño, Emociones y Más',
      description: 'Insomnio, Ansiedad, Depresión, Fatiga crónica, Migrañas y Enfermedades autoinmunes.'
    }
  ];


  services = [
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
}
