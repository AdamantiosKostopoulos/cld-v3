import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  products_Kafedes: Array<product> = [Frape, FreddoEspresso, FreddoCappuccino, Cappuccino, Espresso, Latte];
  products_Anapsiktika: Array<product> = [CocaCola, EpsaPortokalada, Sprite, Soda, Water, RedBull];
  products_Ximoi: Array<product> = [ximosPortokali, ximosAnamiktos];
  products_Mpires: Array<product> = [Heineken330, Alfa400, Fischer500, Amstel330];
  products_Snack: Array<product> = [Tost, ClubGalopoula, ClubKotopoulo, MpagketaKotopoulo];
  products_Pagota: Array<product> = [PagotoSokolata, Granita, PagotoVanilia, PagotoFraoula];

  Cart: Array<product> = []

  @Output() cartEvent = new EventEmitter<(Array<product>)>();
  @Output() TEST_EVENT = new EventEmitter<boolean>();
  @Output() cartEventX = new EventEmitter<number>();

  boolX=false;

  Total:number=0;

  constructor(){}

  ngOnInit(): void {
  }

  @ViewChild ("SideNav", {static:true}) sideNav: ElementRef;
  openSideNav=false;

  public openNav() {
    this.openSideNav=true;
    console.log("OPEN NAV");
  }

  public closeNav() {
    this.openSideNav=false;
    console.log("CLOSE NAV");
  }


  public onAddCart(prodX:product){

    for(let extra of prodX.p_extras){
      if(extra.e_checked == true){
        prodX.p_selectedExtra.push(extra.e_name)
      }
    }

    prodX.p_finalPrice = prodX.p_quantity * prodX.p_price;
    prodX.p_selectedForCart = true;
    prodX.p_showExtra=false;

    this.Cart.push(prodX);
    this.boolX=true;
    this.Total = this.Total + prodX.p_finalPrice;

    console.log("TOTAL: " + this.Total);

    this.cartEvent.emit(this.Cart);
    this.TEST_EVENT.emit(this.boolX);
    this.cartEventX.emit(this.Total);
  }

}

export interface product{
  p_name: string;
  p_price: number;
  p_info ?: string;
  p_extras ?: Array<extra>;
  p_comments ?: string;
  p_quantity: number;
  p_imagePath: string;
  p_hasExtra ?: boolean;
  p_showExtra ?:boolean;
  p_selectedExtra ?: Array<string>;
  p_finalPrice: number;
  p_selectedForCart: boolean;
}

export interface extra{
  e_name: string;
  e_checked: boolean;}



//ΚΑΦΕΔΕΣ
let Frape:product = {
  p_name:'ΦΡΑΠΕ',
  p_price: 4.00,
  p_extras:[
    {e_name:'ΣΚΕΤΟΣ', e_checked:false},
    {e_name:'ΜΕΤΡΙΟΣ', e_checked:false},
    {e_name:'ΓΛΥΚΟΣ', e_checked:false},
    {e_name:'ΜΕ ΓΑΛΑ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/kafedes/frape.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let FreddoEspresso:product = {
  p_name:'FREDDO ESPRESSO',
  p_price: 3.50,
  p_extras:[
    {e_name:'ΣΚΕΤΟΣ', e_checked:false},
    {e_name:'ΜΕΤΡΙΟΣ', e_checked:false},
    {e_name:'ΜΕ ΟΛΙΓΗ', e_checked:false},
    {e_name:'ΓΛΥΚΟΣ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/kafedes/freddoEspresso.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let FreddoCappuccino:product = {
  p_name:'FREDDO CAPPUCCINO',
  p_price: 2.80,
  p_extras:[
    {e_name:'ΣΚΕΤΟΣ', e_checked:false},
    {e_name:'ΜΕΤΡΙΟΣ', e_checked:false},
    {e_name:'ΜΕ ΟΛΙΓΗ', e_checked:false},
    {e_name:'ΓΛΥΚΟΣ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/kafedes/freddoCappuccino.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let Cappuccino:product = {
  p_name:'CAPPUCCINO',
  p_price: 2.00,
  p_extras:[
    {e_name:'ΔΙΠΛΟΣ', e_checked:false},
    {e_name:'ΜΕΤΡΙΟΣ', e_checked:false},
    {e_name:'ΣΚΕΤΟΣ', e_checked:false},
    {e_name:'ΓΛΥΚΟΣ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/kafedes/cappuccino.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let Espresso:product = {
  p_name:'ESPRESSO',
  p_price: 1.50,
  p_extras:[
    {e_name:'ΣΚΕΤΟΣ', e_checked:false},
    {e_name:'ΜΕΤΡΙΟΣ', e_checked:false},
    {e_name:'ΜΕ ΟΛΙΓΗ', e_checked:false},
    {e_name:'ΓΛΥΚΟΣ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/kafedes/espresso.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let Latte:product = {
  p_name:'LATTE',
  p_price: 2.50,
  p_extras:[
    {e_name:'ΣΚΕΤΟΣ', e_checked:false},
    {e_name:'ΜΕΤΡΙΟΣ', e_checked:false},
    {e_name:'ΜΕ ΟΛΙΓΗ', e_checked:false},
    {e_name:'ΓΛΥΚΟΣ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/kafedes/latte.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}



//ΑΝΑΨΥΚΤΙΚΑ
let CocaCola:product = {
  p_name:'COCA COLA',
  p_price: 2.00,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/anapsiktika/cocaCola.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}

let EpsaPortokalada:product = {
  p_name:'ΕΨΑ ΠΟΡΤΟΚΑΛΑΔΑ',
  p_price: 2.00,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/anapsiktika/epsaPortokalada.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}

let Sprite:product = {
  p_name:'SPRITE',
  p_price: 2.00,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/anapsiktika/sprite.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}

let Soda:product = {
  p_name:'ΣΟΔΑ',
  p_price: 1.50,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/anapsiktika/soda.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}

let Water:product = {
  p_name:'ΝΕΡΟ 500ML',
  p_price: 0.50,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/anapsiktika/water.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}

let RedBull:product = {
  p_name:'RED BULL',
  p_price: 2.50,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/anapsiktika/redBull_square.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}



//ΧΥΜΟΙ
let ximosPortokali:product = {
  p_name:'ΧΥΜΟΣ ΠΟΡΤΟΚΑΛΙ',
  p_price: 2.00,
  p_extras:[],
  p_info:'',
  p_quantity: 1,
  p_imagePath: "./assets/images/products/ximoi/ximosPortokali.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}

let ximosAnamiktos:product = {
  p_name:'ΧΥΜΟΣ ΑΝΑΜΙΚΤΟΣ',
  p_price: 2.00,
  p_extras:[],
  p_info:'ΜΗΛΟ, ΜΠΑΝΑΝΑ, ΠΟΡΤΟΚΑΛΙ',
  p_quantity: 1,
  p_imagePath: "./assets/images/products/ximoi/ximosAnamiktos.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}



//ΜΠΥΡΕΣ
let Heineken330:product = {
  p_name:'HEINEKEN 330ML',
  p_price: 3.00,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/mpires/heineken.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}

let Alfa400:product = {
  p_name:'ΑΛΦΑ 400ML',
  p_price: 4.00,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/mpires/alfa.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}

let Fischer500:product = {
  p_name:'FISCHER 500ML',
  p_price: 5.00,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/mpires/fischer.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}

let Amstel330:product = {
  p_name:'AMSTEL 330ML',
  p_price: 2.50,
  p_extras:[],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/mpires/amstel.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_finalPrice: 0,
  p_selectedForCart: false}



//ΣΝΑΚ
let Tost:product = {
  p_name:'ΤΟΣΤ',
  p_price: 2.00,
  p_info:'ΣΥΝΟΔΕΥΕΤΑΙ ΑΠΟ ΠΑΤΑΤΑΚΙΑ',
  p_extras:[
    {e_name:'ΖΑΜΠΟΝ', e_checked:false},
    {e_name:'ΓΑΛΟΠΟΥΛΑ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/snack/tost.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let ClubGalopoula:product = {
  p_name:'CLUB ΓΑΛΟΠΟΥΛΑ',
  p_price: 4.00,
  p_info:'ΣΥΝΟΔΕΥΕΤΑΙ ΑΠΟ ΠΑΤΑΤΕΣ ΤΗΓΑΝΗΤΕΣ',
  p_extras:[
    {e_name:'ΓΑΛΟΠΟΥΛΑ', e_checked:false},
    {e_name:'ΝΤΟΜΑΤΑ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/snack/clubGalopoula.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let ClubKotopoulo:product = {
  p_name:'CLUB ΚΟΤΟΠΟΥΛΟ',
  p_price: 5.00,
  p_info:'ΣΥΝΟΔΕΥΕΤΑΙ ΑΠΟ ΠΑΤΑΤΕΣ ΤΗΓΑΝΗΤΕΣ',
  p_quantity: 1,
  p_imagePath: "./assets/images/products/snack/clubKotopoulo.jpg",
  p_hasExtra: false,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let MpagketaKotopoulo:product = {
  p_name:'ΜΠΑΓΚΕΤΑ ΚΟΤΟΠΟΥΛΟ',
  p_price: 3.00,
  p_info:'ΜΕ ΤΥΡΙ, ΝΤΟΜΑΤΑ, ΜΑΡΟΥΛΙ, ΣΩΣ.',
  p_extras:[
    {e_name:'ΤΥΡΙ', e_checked:false},
    {e_name:'ΝΤΟΜΑΤΑ', e_checked:false},
    {e_name:'ΜΑΡΟΥΛΙ', e_checked:false},
    {e_name:'ΣΩΣ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/snack/mpagketaKotopoulo.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}



//ΠΑΓΩΤΑ
let PagotoSokolata:product = {
  p_name:'ΠΑΓΩΤΟ ΣΟΚΟΛΑΤΑ',
  p_price: 2.50,
  p_extras:[
    {e_name:'ΣΟΚΟΛΑΤΑ', e_checked:false},
    {e_name:'ΤΡΟΥΦΑ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/pagota/pagotoSokolata.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let Granita:product = {
  p_name:'ΓΡΑΝΙΤΑ',
  p_price: 2.00,
  p_extras:[
    {e_name:'ΦΡΑΟΥΛΑ', e_checked:false},
    {e_name:'ΛΕΜΟΝΙ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/pagota/granita.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let PagotoVanilia:product = {
  p_name:'ΠΑΓΩΤΟ ΒΑΝΙΛΙΑ',
  p_price: 2.50,
  p_extras:[
    {e_name:'ΣΟΚΟΛΑΤΑ', e_checked:false},
    {e_name:'ΤΡΟΥΦΑ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/pagota/pagotoVanilia.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}

let PagotoFraoula:product = {
  p_name:'ΠΑΓΩΤΟ ΦΡΑΟΥΛΑ',
  p_price: 2.00,
  p_extras:[
    {e_name:'ΣΟΚΟΛΑΤΑ', e_checked:false},
    {e_name:'ΤΡΟΥΦΑ', e_checked:false}],
  p_quantity: 1,
  p_imagePath: "./assets/images/products/pagota/pagotoFraoula.jpg",
  p_hasExtra: true,
  p_showExtra: false,
  p_selectedExtra: [],
  p_finalPrice: 0,
  p_selectedForCart: false}









