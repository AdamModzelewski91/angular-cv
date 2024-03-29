import { Component, OnInit } from '@angular/core';

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

export class SkillsComponent implements OnInit {
  mainSkills!: SkillSpec[];
  currentIndex: number = 0;
  activeClass: string = 'frontEnd';

  ngOnInit(): void {
    this.mainSkills = [
      { id: 1, spec: 'Frontend', className: 'frontEnd' },
      { id: 2, spec: 'DTP', className: 'DTP' },
      { id: 3, spec: 'Soft', className: 'softSkills' },
    ];
  }

  switchSkills(skills: SkillSpec): void {
    this.currentIndex = skills.id - 1;
    this.activeClass = skills.className;
  }
}

