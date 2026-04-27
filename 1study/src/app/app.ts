import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageStorageService } from '../core/i18n/language.storage.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('study');

  private language = inject(LanguageStorageService);

  calcNumber(a: number, b: number) {
    return a * b;
  }

  ngOnInit() {
    this.language.initLang();

    this.calcNumber(12, 34);
  }
}
