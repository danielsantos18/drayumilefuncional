import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @Input() videoSrc = 'images/new hero.mp4';
  @Input() title = 'Medicina Funcional y Familiar';
  @Input() subtitle = '“Ciencia, experiencia y humanidad al servicio de tu longevidad saludable.”';

  @ViewChild('heroVideo', { static: false }) videoRef?: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.ensureVideoAutoplay();
  }

  private ensureVideoAutoplay(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;

    // 1. Forzar propiedades nativas del DOM requeridas por las políticas de autoplay de navegadores
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    // 2. Intentar reproducir una vez que los datos del video estén listos
    const playAttempt = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch((error) => {
          console.warn('Autoplay bloqueado por el navegador, activando en primera interacción:', error);
          this.attachUserInteractionFallback(video);
        });
      }
    };

    if (video.readyState >= 2) {
      playAttempt();
    } else {
      video.addEventListener('canplay', () => playAttempt(), { once: true });
      video.addEventListener('loadeddata', () => playAttempt(), { once: true });
    }
  }

  private attachUserInteractionFallback(video: HTMLVideoElement): void {
    const playOnInteraction = () => {
      video.play().catch(() => {});
      window.removeEventListener('click', playOnInteraction);
      window.removeEventListener('scroll', playOnInteraction);
      window.removeEventListener('touchstart', playOnInteraction);
    };

    window.addEventListener('click', playOnInteraction, { once: true, passive: true });
    window.addEventListener('scroll', playOnInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', playOnInteraction, { once: true, passive: true });
  }
}
