import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_INITIALIZER } from '@angular/core';
import {SettingsService} from './settings.service';
import {SettingsHttpService} from './settings-http.service';
import {AppConfigService} from './app-config.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
              AppConfigService,
              SettingsService,
              SettingsHttpService,
              {
                provide: APP_INITIALIZER,
                deps: [AppConfigService],
                useFactory(appConfigService){
                 return () => appConfigService.initializeApp();
                }, 
                multi: true 
              }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
