import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { SectionTitleComponent } from '../../atoms/section-title/section-title.component';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent implements AfterViewInit, OnDestroy {
  // Enlace oficial de la ficha de la Dra. Yumile en Google Maps
  googleMapsUrl = 'https://www.google.com/maps/place/Dra.Yumile+Florian-Medicina+Funcional/@4.6594993,-74.1063528,21z/data=!4m10!1m2!2m1!1sdra+yu!3m6!1s0x8e3f9bc0e262b24f:0xcbbf6c29cdd7c012!8m2!3d4.6594993!4d-74.1063528!15sCgZkcmEgeXVaCCIGZHJhIHl1kgEObWVkaWNhbF9jZW50ZXKaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnBGZWsweU9YZGFWMXAyVVZWUk0xSnFXVFZOTUhoVVZqTkplV1ZYWXhBQuABAPoBBAgAED4!16s%2Fg%2F11nvkx2ldq';

  private scriptElement: HTMLScriptElement | null = null;
  private isClosingModal = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', this.handleCaptureClick, true);
      document.addEventListener('keydown', this.handleCaptureKeyDown, true);

      // Pequeño timeout para garantizar que el DOM esté completamente listo
      setTimeout(() => {
        this.loadJotformWidget();
      }, 50);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('click', this.handleCaptureClick, true);
      document.removeEventListener('keydown', this.handleCaptureKeyDown, true);
    }
    if (this.scriptElement && this.scriptElement.parentNode) {
      this.scriptElement.parentNode.removeChild(this.scriptElement);
    }
  }

  /**
   * Captura clics en la 'X' o en el fondo oscuro para animar la salida antes de desmontar el modal
   */
  private handleCaptureClick = (event: MouseEvent): void => {
    if (this.isClosingModal) return;

    const target = event.target as HTMLElement;
    if (!target) return;

    const modal = document.querySelector('.read-more-modal') as HTMLElement;
    if (!modal) return;

    const container = modal.querySelector('.read-more-modal--container');
    const closeBtn = modal.querySelector('.read-more-modal--close-button');

    const isCloseBtnClick = closeBtn && (closeBtn === target || closeBtn.contains(target));
    const isBackdropClick = modal.contains(target) && container && !container.contains(target);

    if (isCloseBtnClick || isBackdropClick) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      this.closeModalWithAnimation(modal, closeBtn as HTMLElement);
    }
  };

  /**
   * Cierra el modal con animación fluida al pulsar Escape
   */
  private handleCaptureKeyDown = (event: KeyboardEvent): void => {
    if (this.isClosingModal || event.key !== 'Escape') return;

    const modal = document.querySelector('.read-more-modal') as HTMLElement;
    if (!modal) return;

    const closeBtn = modal.querySelector('.read-more-modal--close-button') as HTMLElement;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    this.closeModalWithAnimation(modal, closeBtn);
  };

  /**
   * Ejecuta la animación de salida y luego dispara el cierre en React
   */
  private closeModalWithAnimation(modal: HTMLElement, closeBtn: HTMLElement | null): void {
    if (this.isClosingModal) return;
    this.isClosingModal = true;

    modal.classList.add('read-more-modal--closing');

    setTimeout(() => {
      if (closeBtn) {
        closeBtn.click();
      } else {
        modal.remove();
      }
      this.isClosingModal = false;
    }, 220);
  }

  private loadJotformWidget(): void {
    const container = document.getElementById('JFWebsiteWidget-01a0b09f73b870008ddbc57e41ec19627c29');
    if (!container) return;

    // Remover script anterior si existía para forzar ejecución fresca
    const oldScript = document.getElementById('jf-widget-script');
    if (oldScript && oldScript.parentNode) {
      oldScript.parentNode.removeChild(oldScript);
    }

    this.scriptElement = document.createElement('script');
    this.scriptElement.id = 'jf-widget-script';
    this.scriptElement.src = 'https://www.jotform.com/website-widgets/embed/01a0b09f73b870008ddbc57e41ec19627c29';
    this.scriptElement.async = true;
    document.body.appendChild(this.scriptElement);
  }
}

