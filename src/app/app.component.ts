import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/organisms/navbar/navbar.component';
import { FooterComponent } from './shared/components/organisms/footer/footer.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'drayumilefuncional';

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      once: true,
    });
  }
}
