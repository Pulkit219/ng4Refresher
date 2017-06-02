import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  constructor() { }

    public shoppingListItems = [{name:"Pulkit"}, {name:"Calem"}, {name:"Francois"}];
    public selectedItem = {name:""};

onItemClicked(shoppingListItem){
this.selectedItem = shoppingListItem;
}
addItem(shoppingListItem){
this.shoppingListItems.push({name: shoppingListItem.value});
}
removeItem(){
this.shoppingListItems.shift();
}



 ngOnInit() {
  }

}
