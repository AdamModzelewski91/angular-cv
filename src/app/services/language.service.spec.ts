import { InjectionToken, Injector } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore, USE_DEFAULT_LANG } from "@ngx-translate/core";

import { LanguageService } from "./language.service"

describe("LanguageService", () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ LanguageService, TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler ],
    });
    service = TestBed.inject(LanguageService);
  })

  describe("switchLang", () => {
    beforeEach(() => {
      service.switchLang();
    });

    it("should change button text from pl to en", ()=> {
      expect(service.pageLangSubject$.value).toEqual('en')

    });
  });
})
