import { CommonModule } from '@angular/common'; // <--- IMPORTANTE
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
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
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  slides = [
    {
      src: './assets/stripe1.jpg',
      title: 'Implementação de Stripe',
      subtitle: 'conheça stripe e fale conosco',
    },
    {
      src: './assets/stripe2.jpg',
      title: 'Segurança',
      subtitle: 'antifraude em tempo real',
    },
    {
      src: './assets/stripe3.jpg',
      title: 'Modelos de negócios',
      subtitle: 'minimize a perda de clientes',
    },
    {
      src: './assets/stripe4.jpg',
      title: 'Reduza custos',
      subtitle: 'taxas de Pix e boleto são mais baratas',
    },
    {
      src: './assets/stripe5.jpg',
      title: 'Aumente a receita',
      subtitle: 'administre com eficiência',
    },
    {
      src: './assets/stripe6.jpg',
      title: 'Agilidade e rapidez',
      subtitle: 'faturas e cobranças com flexibilidade',
    },
    {
      src: './assets/stripe7.jpg',
      title: 'Integrado para gestão',
      subtitle: 'operações de receita, billing, financeiro',
    },
  ];

  currentIndex = 0;
  intervalTime = 3000;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.intervalTime);
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

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

  goToStripe(): void {
    window.open('https://stripe.com/br', '_blank');
  }

  goToWhatsapp(): void {
    window.open('https://web.whatsapp.com/', '_blank');
  }
}
