import { Component, OnInit } from '@angular/core';
import { CurrencyClientService } from "../../../services/currency/currency-client.service";
import {CurrencyService} from "../../../services/currency/currency-service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  amount1: number = 1;
  amount2: number = 1;
  currency1: string = 'USD';
  currency2: string = 'UAH';
  rates: any = {};

  constructor(
    private currencyClientService: CurrencyClientService,
    private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyClientService.getRates().subscribe(data => {
      this.rates = data.rates;
      this.convert();
    });
  }

  convert(): void {
    const rate1 = this.rates[this.currency1];
    const rate2 = this.rates[this.currency2];
    this.amount2 = this.currencyService.formatAmount(this.amount1 * (rate2 / rate1), 2);
  }

  convertReverse(): void {
    const rate1 = this.rates[this.currency1];
    const rate2 = this.rates[this.currency2];
    this.amount1 = this.currencyService.formatAmount(this.amount2 * (rate1 / rate2), 2);
  }

  swapCurrencies(): void {
    [this.currency1, this.currency2] = [this.currency2, this.currency1];
    [this.amount1, this.amount2] = [this.amount2, this.amount1];
    this.convert();
  }
}
