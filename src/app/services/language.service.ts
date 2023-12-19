import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, take } from 'rxjs';

export enum PageLang {
  PL = 'pl',
  EN = 'en',
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  pageLangSubject$ = new BehaviorSubject(PageLang.PL);
  pageLang$ = this.pageLangSubject$.asObservable();

  constructor(private translate: TranslateService) {
    this.getLangInLocalStorage();
   }

  switchLang(): void {
    const pageLang = this.pageLangSubject$.getValue();
    this.translate.use(pageLang);
    this.putLangInLocalStorage();

    if (pageLang === PageLang.PL) {
      this.pageLangSubject$.next(PageLang.EN);
    } else {
      this.pageLangSubject$.next(PageLang.PL);
    }
  }

  putLangInLocalStorage(): void {
    this.pageLang$.pipe(take(1)).subscribe(lang => {
      localStorage.setItem('cvLang', lang);
    })
  }

  getLangInLocalStorage(): void {
    const cvLang = localStorage.getItem('cvLang') === 'pl' ? PageLang.PL : PageLang.EN;
    if (cvLang) {
      this.pageLangSubject$.next(cvLang);
      this.switchLang();
    }
  }
}
