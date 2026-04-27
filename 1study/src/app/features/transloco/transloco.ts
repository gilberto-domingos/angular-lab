import { Component, inject } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { TranslocoService } from '@jsverse/transloco';
@Component({
  selector: 'app-transloco',
  imports: [TranslocoDirective],
  templateUrl: './transloco.html',
  styleUrl: './transloco.scss',
})
export class Transloco {
  private translocoService = inject(TranslocoService);

  title: string = '';

  setLang(lang: string) {
    this.translocoService.setActiveLang(lang);
    localStorage.setItem('lang', lang);
  }
}
