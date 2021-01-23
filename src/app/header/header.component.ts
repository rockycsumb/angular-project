import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent {
	collapsed: boolean = true;
	
	@Output() linkSelection = new EventEmitter<string>();
	
	onSelect(selection: string){
		// console.log('header ', selection);
		
		this.linkSelection.emit(selection);
	}
	
}