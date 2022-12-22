import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  
  constructor(
    public navRef: AppComponent,    
  ) { }
  

  scrollToSection = (el: HTMLElement): void => {
    el.scrollIntoView({behavior: 'smooth'})    
  }
}
