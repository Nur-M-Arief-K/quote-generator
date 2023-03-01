import { Component } from '@angular/core';
import { Quote } from '../models/quote.model';
import { QuoteAPI } from '../services/quote-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  randomQuote: Quote;
  randomQuoteSubscriber: Subscription;

  constructor(private quoteApi: QuoteAPI, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // subscribe to random quote
    this.randomQuoteSubscriber = this.quoteApi.randomQuote.subscribe(
      (randomQuote) => (this.randomQuote = randomQuote)
    );

    // debugger
    console.log('random quote = ', this.randomQuote);
  }

  ngOnDestroy(): void {
    this.randomQuoteSubscriber.unsubscribe();
  }

  onGenerateRandomQuote() {
    this.quoteApi.generateRandomQuote();
  }

  onAddFavorites() {
    const message = 'Added to favorites';
    // open snackbar in top-right of screen and autoclose after 3s
    this._snackBar.open(message, undefined, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
