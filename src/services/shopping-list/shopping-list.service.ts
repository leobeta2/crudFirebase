import {Injectable} from '@angular/core'
import {AngularFireDatabase} from "angularfire2/database";
import {Item} from "../../models/item/item.model";


@Injectable()
export class ShoppingListService {

  private ShoppingListRef = this.db.list<Item>('shopping-list');

  constructor(private db: AngularFireDatabase){

  }

  getShoppingList(){
    return this.ShoppingListRef;
  }

  addItem(item: Item){
    return this.ShoppingListRef.push(item);
  }

  editItem(item: Item){
    return this.ShoppingListRef.update(item.key, item);
  }

  removeItem(item: Item){
    return this.ShoppingListRef.remove(item.key);
  }
}
