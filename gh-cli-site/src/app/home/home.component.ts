import { Component } from '@angular/core';
import { CarouselComponent} from "../carousel/carousel.component";
import { CokieComponent} from "../cokie/cokie.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CokieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
