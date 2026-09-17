import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogHeroComponent } from '../../organisms/blog-hero/blog-hero.component';
import { BlogArticleComponent } from '../../organisms/blog-article/blog-article.component';
import { AuthorCardComponent } from '../../molecules/author-card/author-card.component';

@Component({
  selector: 'app-blog-template',
  standalone: true,
  imports: [
    CommonModule,
    BlogHeroComponent,
    BlogArticleComponent,
    AuthorCardComponent
  ],
  templateUrl: './blog-template.component.html',
  styleUrl: './blog-template.component.scss'
})
export class BlogTemplateComponent {}

