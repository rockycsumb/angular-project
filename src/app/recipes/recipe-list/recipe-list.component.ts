import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
	  new Recipe('Recipe Name Test', 'Rec Desc test', 'https://www.photosforclass.com/download/pb_256261' ),
	  new Recipe('Recipe Name Test 2', 'Rec Desc test 2', 'https://www.photosforclass.com/download/pb_2278921' ),

  ];
	
  constructor() { }

  ngOnInit(): void {
  }

}
