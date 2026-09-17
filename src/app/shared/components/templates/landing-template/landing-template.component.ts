import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../../organisms/hero/hero.component';
import { AboutSectionComponent } from '../../organisms/about-section/about-section.component';
import { ConditionsSectionComponent } from '../../organisms/conditions-section/conditions-section.component';
import { ServicesSectionComponent } from '../../organisms/services-section/services-section.component';
import { TestimonialsSectionComponent } from '../../organisms/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from '../../organisms/contact-section/contact-section.component';

@Component({
  selector: 'app-landing-template',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutSectionComponent,
    ConditionsSectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './landing-template.component.html',
  styleUrl: './landing-template.component.scss'
})
export class LandingTemplateComponent {}
