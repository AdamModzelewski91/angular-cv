import { Component, OnInit } from '@angular/core';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faRepeat = faRepeat;
  public lang: string = 'en';
  public professionPerfomed: string[] = ['Frontend Developer', 'DTP Operator'];
  public displayProf: string = '';
  public timeOfTyping: number = 200;
  public currentProfIndex: number = 0;

  ngOnInit(): void {
    this.createProfessionView(this.professionPerfomed);
  }

  constructor(
    public translate: TranslateService,
  ) { }

  switchLang = () => {
    this.lang === 'pl' ? this.lang = 'en' : this.lang = 'pl';
    this.translate.use(this.lang);
  }

  createProfessionView = (professions: string[]) => {
    const speltProfessions: any[] = [];
    professions.forEach(prof => speltProfessions.push([...prof]));

    this.spellingProfesionByWord(speltProfessions[this.currentProfIndex])
    setInterval(() => {
      this.displayProf = '';
      this.currentProfIndex === 0 ? this.currentProfIndex = 1 : this.currentProfIndex = 0;
      this.spellingProfesionByWord(speltProfessions[this.currentProfIndex]);
    }, speltProfessions[this.currentProfIndex].length * this.timeOfTyping * 1.5);
  };

  spellingProfesionByWord = (currentProf: string[]) => {
    currentProf.forEach((letter, i) => {
      setTimeout(() => {
        this.displayProf += letter;
      }, (i + 1) * this.timeOfTyping)
    });
  };
}
