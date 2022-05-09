import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor(
    public navRef: AppComponent,    
  ) { }
  
  ngOnInit(): void {
  }
  
  scrollToSection = (el: HTMLElement): void => {
    el.scrollIntoView({behavior: 'smooth'})    
  }
}
