import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogTemplateComponent } from '../../shared/components/templates/blog-template/blog-template.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, BlogTemplateComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {}

