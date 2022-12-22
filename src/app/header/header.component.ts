import { Component, OnInit, OnDestroy } from '@angular/core';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faRepeat = faRepeat;
  public professionPerfomed: string[] = ['Frontend Developer', 'DTP Operator'];
  public displayProf: string = '';
  public timeOfTyping: number = 200;
  public currentProfIndex: number = 0;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.createProfessionView(this.professionPerfomed);
  }

  get getPageLang(): string {
    return this.service.pageLang;
  }

  createProfessionView = (professions: string[]): void => {
    const speltProfessions: any[] = [];
    professions.forEach(prof => speltProfessions.push([...prof]));

    const speedRatio = 1.5;
    this.spellingProfesionByLetter(speltProfessions[this.currentProfIndex]);
    const resetSpelling = speltProfessions[this.currentProfIndex].length * this.timeOfTyping * speedRatio;

    setInterval(() => {
      this.displayProf = '';
      this.currentProfIndex === professions.length - 1 ? this.currentProfIndex = 0 : this.currentProfIndex += 1;
      this.spellingProfesionByLetter(speltProfessions[this.currentProfIndex]);
    }, resetSpelling)
  };

  spellingProfesionByLetter = (currentProf: string[]): void => {
    currentProf.forEach((letter, i) => {
      setTimeout(() => {
        this.displayProf += letter;
      }, (i + 1) * this.timeOfTyping)
    });
  };

  switchLang(): void{
    this.service.switchLang();
  }
}
