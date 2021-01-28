import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const routes: Routes = [
	{path: '', redirectTo: '/recipes', pathMatch: 'full'},
	{path: 'shopping-list', component: ShoppingListComponent},
	{path: 'recipes', component: RecipesComponent}
];

// hello puppet

//whats parlay

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
