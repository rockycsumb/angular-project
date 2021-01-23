import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
	
  constructor() { }

  ngOnInit(): void {
  }
  onAdd(){
	  console.log('from shiping edi ', this.nameInput.nativeElement.value);
	  const newIngredient = new Ingredient(
		  this.nameInput.nativeElement.value, this.amountInput.nativeElement.value
	  )
	  this.ingredientAdded.emit(newIngredient);
	  
  }

}
