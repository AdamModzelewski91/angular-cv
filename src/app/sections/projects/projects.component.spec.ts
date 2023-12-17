import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      imports: [TranslateModule.forRoot()],
      providers: [ LanguageService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    }
  );

  describe("pageLang", () => {
    it('should get lang of page', () => {
      expect(component.pageLang).toEqual('pl');
    });
  });
});
