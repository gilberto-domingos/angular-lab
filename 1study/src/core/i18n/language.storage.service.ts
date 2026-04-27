import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslocoService } from '@jsverse/transloco';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LanguageStorageService {
  private transloco = inject(TranslocoService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  getLang() {
    const saved = localStorage.getItem('lang') || 'en';
    this.transloco.setActiveLang(saved);
  }

  initLang() {
    if (!isPlatformBrowser(this.platformId)) {
      this.transloco.setActiveLang('en');
      return;
    }

    const saved = localStorage.getItem('lang');

    if (saved) {
      this.transloco.setActiveLang(saved);
      return;
    }

    const defaultLang = 'en';
    this.transloco.setActiveLang(defaultLang);
    localStorage.setItem('lang', defaultLang);
  }

  setLang(lang: string) {
    this.transloco.setActiveLang(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}
