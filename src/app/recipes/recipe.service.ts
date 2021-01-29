import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService){}

  private recipes: Recipe[] = [
	  new Recipe(
		  'French Fries',
		  'rocks french fries',
		  'https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg',
	  	  [
		  	new Ingredient('potatos', 4),
			new Ingredient('oil', 1)
	  	  ]),
	  new Recipe(
		  'Hamburger',
		  'A tastey beef burger',  'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_256,q_60,w_256/v1/clients/knoxville/Date_Night_Tako_Taco_2_1b302cf0-20b7-4650-84f1-27f0b8819910.jpg',
	  	  [
		  	new Ingredient('beef', 4),
			new Ingredient('buns', 1)
	  	  ]),
  ];

  getRecipes(){
	  return this.recipes.slice();
  }

  getRecipeById(id: number){
	  return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
	  // this.recipes.push(ingredients);
	  this.shoppingListService.addIngredients(ingredients);
  }
}
