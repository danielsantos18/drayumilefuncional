import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
export class NavbarComponent {
  @ViewChild('navbarContent', { static: false }) navbarContent!: ElementRef;
  @ViewChild('toggler', { static: false }) toggler!: ElementRef;

  constructor(public router: Router) {}

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    const nav = this.navbarContent?.nativeElement;
    const toggleBtn = this.toggler?.nativeElement;

    if (!nav || !toggleBtn) return;

    const clickedInsideNav = nav.contains(event.target);
    const clickedToggler = toggleBtn.contains(event.target);
    const isOpen = nav.classList.contains('show');

    if (isOpen && !clickedInsideNav && !clickedToggler) {
      toggleBtn.click();
    }
  }

  closeOnLinkClick(): void {
    const nav = this.navbarContent?.nativeElement;
    const toggleBtn = this.toggler?.nativeElement;

    if (nav && nav.classList.contains('show')) {
      toggleBtn.click();
    }
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

