import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  checked = false;
  increment = 0;
  value;
  Val;
  value1;
  Val1;
  name;
  total = 0;
  message = "Thank you";
  price = 14;
  summary:boolean;

  constructor(public navCtrl: NavController) {
    this.summary=false;

  }

  minus(){
  
    if(this.increment >0){
    this.increment -=1;
  }
  
  }

  add(){

    this.increment+=1;
  }

  onOrder(){
   this.summary=true;

   if(this.value ==true){
     this.Val = "+Whipped cream";
   }

   if(this.value1 == true){
     this.Val1 = "+chocolate"
   }

   

   this.total=this.price*this.increment;

  }

  onReset(){

    
    this.summary=false;
  }
}
