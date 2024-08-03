import { Component, OnInit } from '@angular/core';
import { CurrencyClientService} from "../../../services/currency/currency-client.service";
import {CurrencyService} from "../../../services/currency/currency-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdRate: number = 0;
  eurRate: number = 0;

  constructor(
    private currencyClientService: CurrencyClientService,
    private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyClientService.getRates().subscribe(data => {
      this.usdRate = this.currencyService.formatAmount(1 / data.rates.USD, 2);
      this.eurRate = this.currencyService.formatAmount(1 / data.rates.EUR, 2);
    });
  }
}
