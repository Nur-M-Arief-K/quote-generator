import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, BehaviorSubject, Subject } from 'rxjs';

import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuoteAPI {
  private apiUrl: string =
    'https://jacintodesign.github.io/quotes-api/data/quotes.json';

  private data: Quote[] = [];

  randomQuote = new Subject<Quote>();

  hasGetQuoteDataFromApiUrlFinished = new BehaviorSubject<boolean>(false);

  isGetQuoteDataFromApiUrlSuccess: boolean = false;

  constructor(private httpClient: HttpClient) {}

  getQuoteDataFromApiUrl() {
    this.httpClient
      .get<Quote[]>(this.apiUrl)
      .pipe(retry(3))
      .subscribe({
        next: (response) => {
          this.hasGetQuoteDataFromApiUrlFinished.next(false);
          this.data = response;
        },
        error: (err) => {
          this.hasGetQuoteDataFromApiUrlFinished.next(true);
          this.isGetQuoteDataFromApiUrlSuccess = false;
          console.log(
            'fetch quote api success?',
            this.isGetQuoteDataFromApiUrlSuccess
          );
          console.log(err);
        },
        complete: () => {
          this.hasGetQuoteDataFromApiUrlFinished.next(true);
          this.isGetQuoteDataFromApiUrlSuccess = true;
          this.generateRandomQuote();
          console.log(
            'fetch quote api success?',
            this.isGetQuoteDataFromApiUrlSuccess
          );
        },
      });
  }

  generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.data.length);
    const randomQuote = this.data[randomIndex];
    console.log('randomIndex = ', randomIndex, 'randomQuote = ', randomQuote);
    this.randomQuote.next(randomQuote);
  }
}
