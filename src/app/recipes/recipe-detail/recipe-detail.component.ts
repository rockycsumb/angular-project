import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import { Ingredient } from "../../shared/ingredient.model";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
  
  

  constructor(private recipeService: RecipeService,
			  private route: ActivatedRoute){}
	
  ngOnInit(): void {
	  const id = +this.route.snapshot.params['id'];
	  this.recipe = this.recipeService.getRecipeById(id);	  
	  
  }
	
  onAddToShoppingList(){
	  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
