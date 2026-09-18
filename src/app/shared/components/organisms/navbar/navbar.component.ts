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
      this.renderer.addClass(document.body, 'u-no-scroll');
      this.renderer.addClass(document.documentElement, 'u-no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'u-no-scroll');
      this.renderer.removeClass(document.documentElement, 'u-no-scroll');
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

  goToSection(sectionId: string): void {
    if (this.router.url === '/' || this.router.url === '/#/') {
      this.scroll(sectionId);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scroll(sectionId);
        }, 100);
      });
    }
    this.closeOnLinkClick();
  }

  private scroll(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

