import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConditionCardComponent, MedicalCondition } from '../../molecules/condition-card/condition-card.component';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';

@Component({
  selector: 'app-conditions-section',
  standalone: true,
  imports: [CommonModule, ConditionCardComponent, SectionTitleComponent],
  templateUrl: './conditions-section.component.html',
  styleUrl: './conditions-section.component.scss'
})
export class ConditionsSectionComponent {
  conditions: MedicalCondition[] = [
    {
      image: 'images/cardio8.png',
      title: 'Cardiometabólicas',
      description: 'Riesgo cardiovascular, Hipertensión arterial, Dislipidemia(Alteraciones del colesterol), Resistencia a la insulina, Prediabetes - Diabetes, Sobrepeso, Obesidad, Hígado graso, Inflamación crónica.'
    },
    {
      image: 'images/digestivos7.png',
      title: 'Digestivas',
      description: 'Síndrome de Intestino Irritable, SIBO(sobrecrecimiento del intestino delgado), Disbiosis(desequilibrios de la microbiota), Estreñimiento - Diarrea, Gastritis - H. Pylori, Intolerancias digestivas, Déficit nutricional asociado.'
    },
    {
      image: 'images/hormonales2.png',
      title: 'Hormonales',
      description: 'Hipotiroidismo, Hashimoto, Tiroiditis, Transición Menopáusica, Menopausia, Síndrome de ovario poliquístico.'
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
}

