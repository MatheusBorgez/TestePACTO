import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/layouts/header/header.component";
import {FooterComponent} from "./shared/layouts/footer/footer.component";
import {AppRoutingService} from "./core/services/app.routing.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor(public routingService: AppRoutingService) {
  }
}
