import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})

export class SkillsComponent implements OnInit {
  public mainSkills: Array<mySkills>;
  public currentIndex: number = 0;
  public activeClass: string = 'frontEnd';

  constructor() {
    this.mainSkills = [
      { id: 1, spec: 'Front-End', className: 'frontEnd' },
      { id: 2, spec: 'DTP', className: 'DTP' },
      { id: 3, spec: 'Soft', className: 'softSkills' },
    ]
  }

  ngOnInit(): void {

  }

  switchSkills = (skills: any) => {
    this.currentIndex = skills.id - 1;
    this.activeClass = skills.className;
  };
}

interface mySkills {
  id: number,
  spec: string,
  className: string,
}