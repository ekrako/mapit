import { Component } from '@angular/core';
import { MarkerService } from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
   //zoom leve;
   zoom: number= 10;
  // start positions
  lat: number = 32.578418;
  lng: number = 34.859007;
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;
  markers: marker[];
  constructor(private _markerService:MarkerService){
     this.markers= _markerService.getMarkers();
  }
  
  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker '+marker.name+' of index '+index);
  }
  mapClicked($event:any){
    var newMarker = {
      name:'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }
    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  markerDragEnd(index:number, $event){
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
    this.markers[index].lat=newLat;
    this.markers[index].lng=newLng;
    this._markerService.updateMarker(index,newLat,newLng);

  }
  addMarker(){
    var isDraggable = this.markerDraggable=='yes';
     var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }
    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }
  removeMarker(index: number) {
    if (index > -1) {
      this.markers.splice(index, 1);
    }
    this._markerService.removeMarker(index);
  }

}
interface marker{
  name?:string,
  lat:number,
  lng:number,
  draggable: boolean
}
