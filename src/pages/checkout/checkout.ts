import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentHttp } from '../../providers/payment-http';
import scriptjs from "scriptjs";

declare let PagSeguroDirectPayment;

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public paymentHttp: PaymentHttp) {
  }

  ionViewDidLoad() {
    scriptjs('https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js', () => {
      this.paymentHttp.getSession()
      .subscribe(
        data => {
            this.initSession(data);
        }
      )
    });
  }

  initSession(data){
    PagSeguroDirectPayment.setSessionId(data.sessionId);
  }

}
