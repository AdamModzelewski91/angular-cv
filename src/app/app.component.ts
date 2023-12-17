import { Component} from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {

  constructor(
    private translate: TranslateService,
    private contexts: ChildrenOutletContexts,
    ) {
      this.translate.addLangs(['en', 'pl']);
      this.translate.setDefaultLang('en');
    }

    getRouteAnimationData() {
      return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}
