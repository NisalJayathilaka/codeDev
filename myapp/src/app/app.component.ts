import { Component } from '@angular/core';
import { Payment } from './payment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  
  payment:Payment[] =[];

    submitValues(f:any):void{
        console.log('asasas');
        this.payment.push(f.value);
        console.log(this.payment); 
    }
}
