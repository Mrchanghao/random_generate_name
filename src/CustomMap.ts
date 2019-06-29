
export interface Marker {
  location: {
    lat: number;
    lng: number;
  };
  makeContent() :string;
  color: string;
}


export class CustomMap {
  private googleMap: google.maps.Map;


  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }
  // bad code
  addMarker(marker: Marker): void {

    const make = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng
      }
    })

    make.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.makeContent()
      })
      infoWindow.open(this.googleMap, make);
    })
  }


  
}



