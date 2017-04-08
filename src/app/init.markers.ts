export class Init {
  load() {
    if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
      console.log('No markers found ... creating ....');
      var markers = [
        {
          name: 'company One',
          lat: 32.578418,
          lng: 34.849007,
          draggable: true
        },
        {
          name: 'company Two',
          lat: 32.568418,
          lng: 34.849007,
          draggable: true
        },
        {
          name: 'company Three',
          lat: 32.568418,
          lng: 34.859007,
          draggable: true
        }
      ];
      localStorage.setItem('markers',JSON.stringify(markers));
    } else {
      console.log('Loading Markers ....')
    }
  }
  constructor() {
    // code...
  }
}