import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { ServiceService } from 'src/app/services/service.service';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
      providers: [ ServiceService ],
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

  })

});
