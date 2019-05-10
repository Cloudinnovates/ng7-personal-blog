import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7-personal-blog';


  onActivate(event): void {
    window.scroll(0, 0);
  }

}
