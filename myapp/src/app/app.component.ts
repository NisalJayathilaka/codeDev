import { Component } from '@angular/core';
import { Pyament } from './payment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  
   payment:Pyament[] =[];
    aray:any = [];


    submitValues(f:any):void{
        console.log('asasas');
        this.payment.push(f.value);
        
    }
}
