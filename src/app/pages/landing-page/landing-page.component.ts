import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingTemplateComponent } from '../../shared/components/templates/landing-template/landing-template.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, LandingTemplateComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {}

