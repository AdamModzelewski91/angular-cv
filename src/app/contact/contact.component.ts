import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public faLinkedin = faLinkedin;
  public faPhone = faPhone; 
  public faEnvelope = faEnvelope;

  constructor() { 
  
   }

  ngOnInit(): void {
  }

}
