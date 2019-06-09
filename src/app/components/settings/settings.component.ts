import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  endpoint: string = environment.deeplApiEndpoint;
  authKey: string = environment.deeplAuthKey.substring(0,6) + "..." + environment.deeplAuthKey.slice(-5);
  showTopNavbar: boolean = environment.showTopNavbar;
  showTranslatorTitle: boolean = environment.showTranslatorTitle;
}
