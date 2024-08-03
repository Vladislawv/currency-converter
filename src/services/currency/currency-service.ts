import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  formatAmount(value: number, fractionDigits: number): number {
    return Number(value.toFixed(fractionDigits));
  }
}
