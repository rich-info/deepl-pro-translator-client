import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showTranlatorTitle = environment.showTranslatorTitle;

  isLoading: boolean = false;
  error: string = "";
  noData: boolean = false;

  fromLanguage: string = "";
  toLanguage: string = "DE";
  textToTranslate: string = "";
  textTranslatedResult: string = "";


  constructor(
    private apiService: ApiService
  ) { }

  translate() {
    this.isLoading = true;

    this.apiService.getTranslation(this.textToTranslate,
      this.fromLanguage,
      this.toLanguage).subscribe((data: any) => {
        console.log(data);
        this.isLoading = false;
        this.textTranslatedResult = data;
      }, (error) => {
        console.log(error);
        this.isLoading = false;
        this.textTranslatedResult = error;
      });

  }

}
