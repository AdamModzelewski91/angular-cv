import { TestBed } from "@angular/core/testing";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NavComponent } from "../nav/nav.component";
import { LanguageService } from "./language.service"

describe("LanguageService", () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [TranslateModule.forRoot(),],
      providers: [ LanguageService, TranslateService ],
    }).compileComponents();
    service = TestBed.inject(LanguageService);

  })

  describe("switchLang", () => {
    beforeEach(() => {
      service.switchLang();
    });

    it("should change button text from pl to en", ()=> {
      expect(service.pageLang).toEqual('en')
    });
  });
})