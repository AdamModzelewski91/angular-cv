import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cv';
  @ViewChild('homeRef') homeElementRef!: ElementRef;
  @ViewChild('skillsRef') skillsElementRef!: ElementRef;
  @ViewChild('expRef') expElementRef!: ElementRef;
  @ViewChild('projectsRef') projectsElementRef!: ElementRef;
  @ViewChild('aboutRef') aboutElementRef!: ElementRef;
  @ViewChild('contactRef') contactElementRef!: ElementRef;
  
  
  constructor(
    private translate: TranslateService,   
    ) {
      translate.addLangs(['en', 'pl']);
      translate.setDefaultLang('en');
    }
}
