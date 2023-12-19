import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from 'src/app/services/language.service';

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

export class ProjectsComponent implements OnInit{
  faGlobe = faGlobe;
  myProjectsApi!: MyProjects[];
  pageLang$ = this.languageService.pageLang$;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
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
}
