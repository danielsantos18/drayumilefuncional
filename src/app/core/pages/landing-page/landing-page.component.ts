import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { AppointmentComponent } from '../../components/appointment/appointment.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    AboutComponent,
    ContactComponent,
    AppointmentComponent,
    FooterComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
