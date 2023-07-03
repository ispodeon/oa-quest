import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  public name: string = '';
  public count: number = 0;
  public items: TodoItem[] = [];

  addItem(itemname: string){
    this.items.push({id: this.count++, name: itemname, isComplete: false});
  }

  complete(index: number){
    this.items[index].isComplete = this.items[index].isComplete ? false : true;

    console.log("index",index);
    
    console.log(this.items[index].isComplete);
    
  }

  displayStatus(){
    let total = 0;
    for (let index = 0; index < this.items.length; index++) {
      total += this.items[index].isComplete ? 0: 1;
      
    }
    return `${total} remaining out of ${this.items.length} tasks`;
  }

  share() {
    window.alert('The product has been shared!');
  }
}

export interface TodoItem { id: number; name: string; isComplete: boolean}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/