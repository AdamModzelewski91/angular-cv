import { Component } from '@angular/core';

interface MySkills {
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
  mainSkills: MySkills[];
  currentIndex: number = 0;
  activeClass: string = 'frontEnd';

  constructor() {
    this.mainSkills = [
      { id: 1, spec: 'Frontend', className: 'frontEnd' },
      { id: 2, spec: 'DTP', className: 'DTP' },
      { id: 3, spec: 'Soft', className: 'softSkills' },
    ]
  }

  switchSkills(skills: MySkills) {
    this.currentIndex = skills.id - 1;
    this.activeClass = skills.className;
  }
}

