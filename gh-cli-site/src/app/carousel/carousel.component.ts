import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle} from "@angular/material/card";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatCardSubtitle
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

}
