import { Component, OnInit } from '@angular/core';
import { QuoteAPI } from './services/quote-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quote-generator';

  constructor(private quoteApi: QuoteAPI) {}

  ngOnInit(): void {
    // unsubscribe automatically after http call is successful or failed
    this.quoteApi.getQuoteDataFromApiUrl();
  }
  
}
