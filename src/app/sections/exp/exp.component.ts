import { Component, OnInit } from '@angular/core';
import { SkillSpec } from '../skills/skills.component';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit{
  myExp!: SkillSpec[];
  currentIndex: number = 0;
  activeClass: string = 'frontEnd';

  ngOnInit() {
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
