import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  pageLang: string = 'pl';

  constructor(public translate: TranslateService) { }

  switchLang(): void {
    this.translate.use(this.pageLang);
    this.pageLang === 'pl' ? this.pageLang = 'en' : this.pageLang = 'pl';
  }
}
