import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public navScrolling: AppComponent;
  
  constructor(
    public navRef: AppComponent,
  ) { 
    this.navScrolling = this.navRef;      
  }
  
  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'})
  }

}
