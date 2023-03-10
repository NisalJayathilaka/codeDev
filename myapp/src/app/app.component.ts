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

  submitValues(addForm: any): void {
    this.payment.push(addForm.value);
    this.payment = _.sortBy(this.payment, 'name');
    addForm.reset();
  }

  rowSelected(args:any){
    this.payment.splice(args, 1);    
  }
}
