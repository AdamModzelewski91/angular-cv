import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  public faGlobe = faGlobe;
  public myProjectsApi!: any[];


  constructor(
    private sanitizer: DomSanitizer,
    public service: ServiceService
  ) {
  }

  ngOnInit(): void {
    fetch('../../../assets/myprojects/myprojects.json', {
      mode: 'no-cors'
    })
      .then(res => res.json())
      .then(data => this.myProjectsApi = data)
  }

  getTrustedUrl(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
