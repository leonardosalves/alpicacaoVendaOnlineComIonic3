import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Cart {
  items: Array<any> = []; 
  total = 0;

  addItem(item){
    this.items.push(item);
    this.calculaTotal();
  }
  removeItem(index){
    this.items.splice(index, 1);
    this.calculaTotal();
  }
  calculaTotal(){
    let total = 0;
    this.items.forEach( item => {
      total += Number(item.price);
    });
    this.total = total;
  }

}
