import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export type ButtonVariant = 'cta' | 'bubble' | 'primary' | 'outline' | 'link';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label = '';
  @Input() variant: ButtonVariant = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() href?: string;
  @Input() routerLink?: string;
  @Input() target?: string;
  @Input() customClass = '';
  @Input() disabled = false;

  @Output() btnClick = new EventEmitter<Event>();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    if (this.href && this.href.startsWith('#') && isPlatformBrowser(this.platformId)) {
      event.preventDefault();
      const targetId = this.href.substring(1);

      if (this.router.url === '/' || this.router.url === '/#/' || !this.router.url.includes('/blog')) {
        this.scrollToTarget(targetId);
      } else {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => {
            this.scrollToTarget(targetId);
          }, 150);
        });
      }
    }

    this.btnClick.emit(event);
  }

  private scrollToTarget(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

