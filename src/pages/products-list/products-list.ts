import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductHttp } from '../../providers/product-http';
import { Cart } from '../../providers/cart';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

  public products:Observable<Array<any>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productHttp: ProductHttp,public toastCtrl: ToastController ,public cart: Cart) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.products = this.productHttp.query();
    }, 300);
  }
  
  addItem(product){
    this.cart.addItem(product);
    let toast = this.toastCtrl.create({
      message: 'Produto adicionado no carrinho',
      duration: 3000
    });
    toast.present();
  }

}
