import { Component, Input, Output, EventEmitter } from '@angular/core';
import { product } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cld-test';
  collapsed=false;

  b1:boolean;

  Total2:number;

  cartArray:Array<product>;

  public cartMove(cArray:Array<product>){
    this.cartArray = cArray;
  }


  public Bully(b:boolean){
    this.b1=b;
  }

  public getTotal(n:number){
    this.Total2 = n;
    console.log("TOTAL2: " + this.Total2)
  }


}
