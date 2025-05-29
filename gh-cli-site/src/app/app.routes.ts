import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CokieDialogComponent } from './Components/cokie-dialog/cokie-dialog.component';
import { CokieComponent } from './Components/cokie/cokie.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu-bar', component: MenuBarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'dialog', component: CokieDialogComponent },
  { path: 'cokie', component: CokieComponent },
];
