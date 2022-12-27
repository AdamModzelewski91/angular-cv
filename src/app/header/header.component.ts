import { Component, OnInit, OnDestroy } from '@angular/core';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faRepeat = faRepeat;
  professionPerfomed: string[] = ['Frontend Developer', 'DTP Operator'];
  displayProf: string = '';
  timeOfTyping: number = 200;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.createProfessionView(this.professionPerfomed);
  }

  get getPageLang(): string {
    return this.languageService.pageLang;
  }

  createProfessionView = (professions: string[]): void => {
    const speltProfessions: any[] = [];
    professions.forEach(prof => speltProfessions.push([...prof]));

    const speedRatio = 1.5;
    let currentProfIndex = 0;

    this.spellingProfesionByLetter(speltProfessions[currentProfIndex]);
    
    const resetSpelling = speltProfessions[currentProfIndex].length * this.timeOfTyping * speedRatio;
    setInterval(() => {
      this.displayProf = '';
      currentProfIndex === professions.length - 1 ? 0 : 1;
      this.spellingProfesionByLetter(speltProfessions[currentProfIndex]);
    }, resetSpelling);
  };

  spellingProfesionByLetter = (currentProf: string[]): void => {
    currentProf.forEach((letter, i) => {
      setTimeout(() => {
        this.displayProf += letter;
      }, (i + 1) * this.timeOfTyping)
    });
  };

  switchLang(): void{
    this.languageService.switchLang();
  }
}
