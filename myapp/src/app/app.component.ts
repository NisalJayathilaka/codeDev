import { Component } from '@angular/core';
import { Payment } from './payment';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  payment: Payment[] = [];
  sortedArray:Payment[] = [];

  submitValues(f: any): void {
    this.payment.push(f.value);
    this.sortedArray = _.sortBy(this.payment, 'name');
  }

  deleteValue() {
    this.sortedArray.pop();
  }
}
