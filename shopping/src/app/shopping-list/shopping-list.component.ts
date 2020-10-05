import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredientsList = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientListChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredientsList = ingredients;
      }
    );
  }
}
