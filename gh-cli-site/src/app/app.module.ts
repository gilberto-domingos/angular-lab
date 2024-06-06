import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent} from "./carousel/carousel.component";
import { CokieComponent} from "./cokie/cokie.component";
import { CokieDialogComponent} from "./cokie-dialog/cokie-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    FooterComponent,
    CarouselComponent,
    CokieDialogComponent,
    CokieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
