import { Component } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceService } from 'src/app/services/service.service';

export interface MyProjects {
  name: string,
  langs: string [],
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

  constructor(
    private sanitizer: DomSanitizer,
    private service: ServiceService
  ) {
    this.myProjectsApi = [
      {
        name: "Cinemafinder",
        langs: ["AngularJS", "JS", "RestAPI", "HTML", "CSS"],
        iframe: "https://adammodzelewski91.github.io/cinemato_finder/dist/",
        github: "https://github.com/AdamModzelewski91/cinemato_finder",
        description_pl: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea aliquam amet quos quidem molestias placeat laboriosam, perferendis illum quaerat nesciunt accusantium blanditiis quas tempora.",
        description_en: "orem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        name: "Bookstore",
        langs: ["React", "Redux", "JS", "HTML", "CSS"],
        iframe: "https://adammodzelewski91.github.io/Bookstore/",
        github: "https://github.com/AdamModzelewski91/Bookstore",
        description_pl: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea aliquam amet quos quidem molestias placeat laboriosam, perferendis illum quaerat nesciunt accusantium blanditiis quas tempora.",
        description_en: "orem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        name: "Motonews",
        langs: ["React", "JS", "HTML", "CSS"],
        iframe: "https://adammodzelewski91.github.io/Motonews/",
        github: "https://github.com/AdamModzelewski91/Motonews",
        description_pl: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea aliquam amet quos quidem molestias placeat laboriosam, perferendis illum quaerat nesciunt accusantium blanditiis quas tempora.",
        description_en: "orem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        name: "CV - this project",
        langs: ["Angular", "TS", "HTML", "CSS"],
        iframe: "",
        github: "https://github.com/AdamModzelewski91/angular-cv",
        description_pl: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea aliquam amet quos quidem molestias placeat laboriosam, perferendis illum quaerat nesciunt accusantium blanditiis quas tempora.",
        description_en: "orem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ]
  }

  get pageLang(): string {
    return this.service.pageLang;
  }  
}
