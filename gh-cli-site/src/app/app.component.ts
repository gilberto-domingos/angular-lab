import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',  
})
export class AppComponent {
  title = 'b1010code';
}
