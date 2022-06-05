import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public buttonLang: string = 'pl';
  public pageLang: string = 'en';

  constructor(public translate: TranslateService) { }

  switchLang () {
    this.pageLang = this.buttonLang;
    this.buttonLang === 'pl' ? this.buttonLang = 'en' : this.buttonLang = 'pl';
    this.translate.use(this.pageLang);
  }
}
