import { Injectable } from '@angular/core';
import { Init } from '../init.markers';

@Injectable()
export class MarkerService extends Init{

  constructor() {
  	super();
  	console.log ('MarkerService Initialized...');
  	this.load();
  }

  getMarkers(){
  	var markers=JSON.parse(localStorage.getItem('markers'));
  	return markers;
  }

  setMarkers(markers){
  	localStorage.setItem('markers',JSON.stringify(markers));
  }

  addMarker(marker){
  	var markers=JSON.parse(localStorage.getItem('markers'));
  	markers.push(marker);
  	localStorage.setItem('markers',JSON.stringify(markers));
  }
  updateMarker(marker,newLat,newLng){
  	var markers=JSON.parse(localStorage.getItem('markers'));
  	for (var i = markers.length - 1; i >= 0; i--) {
  		if (markers[i].lat==marker.lat&&markers[i].lng==marker.lng){
  			markers[i].lat=newLat;
  			markers[i].lng=newLng;
  		}
  	}
  	localStorage.setItem('markers',JSON.stringify(markers));
  }
  removeMarker( index: number) {
  	var markers=JSON.parse(localStorage.getItem('markers'));
    if (index > -1) {
      markers.splice(index, 1);
    }
    localStorage.setItem('markers',JSON.stringify(markers));
  }

}
