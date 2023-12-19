import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/services/language.service';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
      providers: [ LanguageService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
  });

  describe('switchSkills', ()=> {
    beforeEach(() => {
      component.switchSkills({ id: 2, spec: 'DTP', className: 'DTP' });
    });

    it('should set activeClass', () => {
      expect(component.activeClass).toEqual('DTP');
    });

    it('should set currentIndex', () => {
      expect(component.currentIndex).toEqual(1);
    });
  });

  describe("ngOnInit", () => {
    it("should set main Skills", () => {
      component.ngOnInit();

      expect(component.mainSkills).toBeDefined()
    })
  })

});
