import { Component } from '@angular/core';
// how to start server on goorm
 // ng serve --host 0.0.0.0 --port 4200  --disable-host-check

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    loadedPage = 'recipes';
	
	onNavigate(selection: string){
		console.log('from app component ', selection);
		this.loadedPage = selection;
	}
}
