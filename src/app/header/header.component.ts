import { Component, OnInit, OnDestroy } from '@angular/core';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  faRepeat = faRepeat;
  professionPerfomed: string[] = ['Frontend Developer', 'DTP Operator'];
  displayProf: string = '';
  timeOfTyping: number = 200;
  pageLang: string = 'pl';

  onDestroy$ = new Subject<void>();

  setIntervalId!: any;
  setTimoutId!: any;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getPageLang();
    this.createProfessionView(this.professionPerfomed);
  }

  getPageLang(): void {
    this.languageService.pageLang$
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe((lang: string) => this.pageLang = lang)
  }

  createProfessionView = (professions: string[]): void => {
    const speltProfessions: any[] = [];
    professions.forEach(prof => speltProfessions.push([...prof]));

    const speedRatio = 1.5;
    let currentProfIndex = 0;

    this.spellingProfesionByLetter(speltProfessions[currentProfIndex]);

    const resetSpelling = speltProfessions[currentProfIndex].length * this.timeOfTyping * speedRatio;
    this.setIntervalId = setInterval(() => {
      this.displayProf = '';
      currentProfIndex === professions.length - 1 ? 0 : 1;
      this.spellingProfesionByLetter(speltProfessions[currentProfIndex]);
    }, resetSpelling);
  };

  spellingProfesionByLetter = (currentProf: string[]): void => {
    currentProf.forEach((letter, i) => {
      this.setTimoutId = setTimeout(() => {
        this.displayProf += letter;
      }, (i + 1) * this.timeOfTyping)
    });
  };

  switchLang(): void{
    this.languageService.switchLang();
  }

  ngOnDestroy(): void {
    if (this.setIntervalId) {
      clearInterval(this.setIntervalId)
    }

    if (this.setTimoutId) {
      clearTimeout(this.setTimoutId)
    }
  }
}
