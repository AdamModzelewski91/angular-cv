import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

export interface SkillSpec {
  id: number,
  spec: string,
  className: string,
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})

export class SkillsComponent {
  mainSkills: SkillSpec[];
  currentIndex: number = 0;
  activeClass: string = 'frontEnd';

  constructor(private languageService: LanguageService) {
    this.mainSkills = [
      { id: 1, spec: 'Frontend', className: 'frontEnd' },
      { id: 2, spec: 'DTP', className: 'DTP' },
      { id: 3, spec: 'Soft', className: 'softSkills' },
    ]
  }

  switchSkills(skills: SkillSpec) {
    this.currentIndex = skills.id - 1;
    this.activeClass = skills.className;
  }
}

