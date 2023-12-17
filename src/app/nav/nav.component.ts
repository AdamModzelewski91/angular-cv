import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @HostListener('click', []) clickNav() {
    window.scrollTo({top: 0})
  }
}
