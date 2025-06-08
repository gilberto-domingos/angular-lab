import { CommonModule } from '@angular/common'; // <--- IMPORTANTE
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CarouselComponent } from '../carousel/carousel.component';
import { CokieComponent } from '../cokie/cokie.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    CokieComponent,
    MatButtonToggleModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  expanded = false;
  maxHeight = 0;

  @ViewChild('stripeImage', { static: false })
  stripeImage!: ElementRef<HTMLImageElement>;
  @ViewChild('textContent', { static: false }) textContent!: ElementRef;

  ngAfterViewInit(): void {
    const image = this.stripeImage.nativeElement;

    if (image.complete) {
      this.setMaxHeight();
    } else {
      image.onload = () => {
        this.setMaxHeight();
      };
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (!this.expanded) {
      this.setMaxHeight();
    }
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
    if (!this.expanded) {
      this.setMaxHeight();
    }
  }

  private setMaxHeight(): void {
    if (this.stripeImage && this.stripeImage.nativeElement) {
      const height = this.stripeImage.nativeElement.clientHeight;
      this.maxHeight = height - 20;
    }
  }
}
