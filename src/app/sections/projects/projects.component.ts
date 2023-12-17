import { Component } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from 'src/app/services/language.service';
import { Subject, takeUntil } from 'rxjs';

export interface MyProjects {
  name: string,
  langs: string[],
  iframe: string,
  github: string,
  description_pl: string,
  description_en: string
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  public faGlobe = faGlobe;
  public myProjectsApi!: MyProjects[];
  pageLang!: string;

  onDestroy$ = new Subject();

  constructor(
    private languageService: LanguageService
  ) {
    this.myProjectsApi = [
      {
        name: "Project CV",
        langs: ["Angular", "TS", "HTML", "CSS"],
        iframe: "./assets/CV-project.png",
        github: "https://github.com/AdamModzelewski91/angular-cv",
        description_pl: "Prosta strona którą stworzyłem aby mieć w jednym miejscu CV jak i moje projekty którymi chciałbym się pochwalić.",
        description_en: "Simple site that I made to have in one place the CV and my projects that I would like to share."
      }
    ]
  }

  getPageLang(): void {
    this.languageService.pageLang$
    .pipe(
      takeUntil(this.onDestroy$)
    )
    .subscribe((lang: string) => this.pageLang = lang)
  }
}
