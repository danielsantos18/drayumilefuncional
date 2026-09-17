import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-hero.component.html',
  styleUrl: './blog-hero.component.scss'
})
export class BlogHeroComponent implements AfterViewInit {
  @Input() title = '🫀Riesgo Cardiovascular';
  @Input() subtitle = 'Un enemigo silencioso, pero prevenible';
  @Input() author = 'Dra. Yumile Florián Páez';
  @Input() year = '2025';

  @ViewChild('video1') video1Ref!: ElementRef<HTMLVideoElement>;
  @ViewChild('video2') video2Ref!: ElementRef<HTMLVideoElement>;

  videoList: string[] = [
    'images/blog-animado.mp4',
    'images/blog-animado2.mp4'
  ];

  activeVideoIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const v1 = this.video1Ref?.nativeElement;
    const v2 = this.video2Ref?.nativeElement;

    if (v1) {
      v1.muted = true;
      v1.defaultMuted = true;
      v1.playsInline = true;
      v1.play().catch(() => {});
    }

    if (v2) {
      v2.muted = true;
      v2.defaultMuted = true;
      v2.playsInline = true;
    }
  }

  onVideoEnded(endedIndex: number): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const v1 = this.video1Ref?.nativeElement;
    const v2 = this.video2Ref?.nativeElement;

    if (endedIndex === 0) {
      // Pasar a video 2
      this.activeVideoIndex = 1;
      if (v2) {
        v2.currentTime = 0;
        v2.play().catch(() => {});
      }
    } else {
      // Repetir y volver a video 1
      this.activeVideoIndex = 0;
      if (v1) {
        v1.currentTime = 0;
        v1.play().catch(() => {});
      }
    }
  }
}

