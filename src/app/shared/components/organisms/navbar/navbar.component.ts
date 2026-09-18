import { Component, ElementRef, HostListener, Inject, OnDestroy, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ThemeToggleComponent } from '../../molecules/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent, ButtonComponent, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  isMenuOpen = false;
  private savedScrollY = 0;
  private isScrollLocked = false;

  constructor(
    public router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnDestroy(): void {
    this.setScrollLock(false);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.setScrollLock(this.isMenuOpen);
  }

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.setScrollLock(false);
    }
  }

  private setScrollLock(locked: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (locked) {
      if (this.isScrollLocked) return;
      this.savedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      this.isScrollLocked = true;

      this.renderer.addClass(document.body, 'u-no-scroll');
      this.renderer.setStyle(document.body, 'position', 'fixed');
      this.renderer.setStyle(document.body, 'top', `-${this.savedScrollY}px`);
      this.renderer.setStyle(document.body, 'left', '0');
      this.renderer.setStyle(document.body, 'right', '0');
      this.renderer.setStyle(document.body, 'width', '100%');
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      if (!this.isScrollLocked) return;
      this.isScrollLocked = false;

      const scrollY = this.savedScrollY;
      this.renderer.setStyle(document.documentElement, 'scroll-behavior', 'auto');

      this.renderer.removeClass(document.body, 'u-no-scroll');
      this.renderer.removeStyle(document.body, 'position');
      this.renderer.removeStyle(document.body, 'top');
      this.renderer.removeStyle(document.body, 'left');
      this.renderer.removeStyle(document.body, 'right');
      this.renderer.removeStyle(document.body, 'width');
      this.renderer.removeStyle(document.body, 'overflow');

      window.scrollTo(0, scrollY);

      requestAnimationFrame(() => {
        this.renderer.removeStyle(document.documentElement, 'scroll-behavior');
      });
    }
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    if (!this.isMenuOpen) return;
    const target = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 992 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  closeOnLinkClick(): void {
    this.closeMenu();
  }

  navigateToBlog(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.closeMenu();
    this.router.navigate(['/blog']);
  }

  goToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.closeMenu();

    const currentUrl = this.router.url.split('?')[0].split('#')[0];
    const isHome = currentUrl === '' || currentUrl === '/';

    if (isHome) {
      setTimeout(() => {
        this.scroll(sectionId);
      }, 50);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scroll(sectionId);
        }, 160);
      });
    }
  }

  private scroll(id: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setTimeout(() => {
        const retryEl = document.getElementById(id);
        if (retryEl) {
          retryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
    }
  }
}

