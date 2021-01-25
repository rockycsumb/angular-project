import {Injectable, EventEmitter} from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";


@Injectable({providedIn: 'root'})
export class ShoppingListService {
	shoppingListChanged = new EventEmitter<Ingredient[]>();
	
	private ingredients: Ingredient[] = [
		new Ingredient('apples', 5),
		new Ingredient('tomatoes', 10)
	];
	
	getIngredients(){
		return this.ingredients.slice();
	}
	
	addIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		this.shoppingListChanged.emit(this.ingredients.slice());
	}
	
	addIngredients(ingredients: Ingredient[]){
		this.ingredients.push(...ingredients);
		this.shoppingListChanged.emit(this.ingredients.slice());
	}
}