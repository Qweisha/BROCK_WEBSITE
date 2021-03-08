
import { Component } from '@angular/core';

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BROCK';
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor(){}
}
