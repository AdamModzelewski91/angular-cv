import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { SkillSpec } from '../skills/skills.component';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent {
  myExp: SkillSpec[];
  currentIndex: number = 0;
  activeClass: string = 'frontEnd';

  constructor(private languageService: LanguageService) {
    this.myExp = [
      { id: 1, spec: 'Frontend', className: 'frontEnd' },
      { id: 2, spec: 'DTP', className: 'DTP' },
    ]
  }

  switchSkills(skills: SkillSpec) {
    this.currentIndex = skills.id - 1;
    this.activeClass = skills.className;
  }
}
