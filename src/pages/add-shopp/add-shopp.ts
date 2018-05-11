import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from "../../models/item/item.model";
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';


/**
 * Generated class for the AddShoppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopp',
  templateUrl: 'add-shopp.html',
})
export class AddShoppPage {
  item: Item = {
    name:'',
    quantity: undefined,
    price: undefined
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private shopping: ShoppingListService,
              private toast: ToastService
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppPage');
  }

  addItem(item: Item){
    this.shopping.addItem(item).then(ref => {
      this.toast.show('${item.name} added!!');
      this.navCtrl.setRoot('HomePage', {key: ref.key})
    })
  }

}
