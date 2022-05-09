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

  constructor() { }

  ngOnInit(): void {
    fetch('../../../assets/myprojects/myprojects.json', {
      mode: 'no-cors'
    })
      .then(res => res.json())
      .then(data => this.myProjectsApi = data)
  }

}
