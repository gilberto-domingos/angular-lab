import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from "./carousel/carousel.component";
import { CokieDialogComponent} from "./cokie-dialog/cokie-dialog.component";
import { CokieComponent} from "./cokie/cokie.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu-bar', component: MenuBarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'dialog', component: CokieDialogComponent },
  { path: 'cokie', component: CokieComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }
