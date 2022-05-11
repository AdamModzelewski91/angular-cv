import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  public faGlobe = faGlobe;
  public myProjectsApi: any[] = [];
  public currentIndexSlide: number = 0;
  private speedOfSwitchSlides: number = 5000;

  constructor() { }

  ngOnInit(): void {
    fetch('../../../assets/myprojects/myprojects.json', {
      mode: 'no-cors'
    })
      .then(res => res.json())
      .then(data => this.myProjectsApi = data)

    this.switchSlides();
  }

  switchSlides = () => {
    setInterval(() => {
      this.currentIndexSlide++;
      this.currentIndexSlide === 3 ? this.currentIndexSlide = 0 : null;
    }, this.speedOfSwitchSlides)
  }

}
