import { Component, Input, OnInit } from '@angular/core';
import { product } from '../product/product.component';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobile=false;

  public navbarCollapsed = true;

  collapsed = true;

  hover_eisodos=false;
  hover_eggrafi=false;
  hover_kalathi=false;



  @Input() cartItems: Array<product>;
  @Input() boolY: boolean;
  @Input() finalTotal: number;

  cartItemsAmount:number = 0;
  cartTotalPrice:number = 0
  boolTest=false;

  subscription: Subscription;
  source = interval(10000);


  i=0;

  constructor() { }

  ngOnInit(): void {


  }






  public showStuff(){
    this.boolTest=true;
    for(let x of this.cartItems){
      console.log(this.cartItems.length);
      console.log(x.p_name)
      console.log("QUANTITY: " + x.p_quantity);
      console.log(x.p_selectedExtra);
      console.log(x.p_comments);

      console.log("TOTAL amount of items(header): " + (this.cartItemsAmount += x.p_quantity));
      console.log("FINAL TOTAL: " + this.finalTotal)
    }

      for(let item of this.cartItems){
        this.cartTotalPrice = this.cartTotalPrice + item.p_finalPrice;
      }





    this.cartItemsAmount = this.cartItems.length;
  }




}


/*
setInterval(function (x: Array<product>) {
      for(let item of x){
        this.cartTotalPrice += item.p_finalPrice;
      }
    },1000)
*/
