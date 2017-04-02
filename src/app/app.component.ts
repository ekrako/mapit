import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 32.578418;
  lng: number = 34.859007;
}
