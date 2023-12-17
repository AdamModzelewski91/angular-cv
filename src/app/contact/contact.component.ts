import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faLinkedin = faLinkedin;
  faPhone = faPhone; 
  faEnvelope = faEnvelope;

  constructor(private languageService: LanguageService) {
    
  }

}
