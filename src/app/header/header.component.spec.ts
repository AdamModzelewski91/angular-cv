import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, flush, tick, discardPeriodicTasks } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [TranslateModule.forRoot()],
      providers: [ LanguageService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    }
  );

  describe("ngOnInit", () => {
    it("should call method", () => {
      const createProfessionView = spyOn(component, "createProfessionView")
      component.ngOnInit();

      expect(createProfessionView).toHaveBeenCalled();
    });
  });

  describe("getPageLang", () => {
    it("should get page lang", () => {
      component.getPageLang();
      expect(component.pageLang).toEqual('pl')
    });
  });

  describe("createProfessionView", () => {
    it("should create view model that ll be spelling words by letter", fakeAsync(()=> {
      component.ngOnInit();

      tick(4600);

      expect(component.displayProf).toEqual('Frontend Developer');
      discardPeriodicTasks();
    }))

    it("should call method spellingProfesionByLetter", fakeAsync(()=> {
      const spellingProfesionByLetter = spyOn(component, "spellingProfesionByLetter")
      component.ngOnInit();

      tick(200);

      expect(spellingProfesionByLetter).toHaveBeenCalled();
      discardPeriodicTasks();
    }))
  })

  describe("spellingProfesionByLetter", () => {
    it("should spell out passed argument", fakeAsync(()=> {
      component.spellingProfesionByLetter(["test"]);
      flush();
      expect(component.displayProf).toEqual("test");
    }))
  })

  describe("switchLang", () => {
    it('should call method in service to switch lang', () => {
      const switchLang = spyOn(component, "switchLang")
      const button = fixture.debugElement.query(By.css('.switch-btn'));
      button.triggerEventHandler('click', null);

      expect(switchLang).toHaveBeenCalled();
    });
  });
});
