import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
	
  recipes: Recipe[] = [
	  new Recipe(
		  'Recipe Name Test', 
		  'Rec Desc test', 
		  'https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg' ),
	  new Recipe(
		  'Recipe Name Test 2', 
		  'Rec Desc test 2', 
		  'https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg' ),
  ];
	
  constructor() { }

  ngOnInit(): void {
  }
	
	onRecipeSelected(recipe: Recipe){
		this.recipeWasSelected.emit(recipe);
	}

}
