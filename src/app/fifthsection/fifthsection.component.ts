import { Component } from '@angular/core';

@Component({
  selector: 'fifth-section',
  templateUrl: './fifthsection.component.html',
  styleUrls: ['./fifthsection.component.css']
})
export class FifthSection {
mapOptions: google.maps.MapOptions = {
    center: { lat: 41.02501915316403, lng: 28.981049711793283 },
    zoom: 14,
    zoomControl: false,
       mapTypeControl: false,
       streetViewControl: false,
       fullscreenControl: false
  };
}
