import { Component } from '@angular/core';

@Component({
  selector: 'fifth-section',
  templateUrl: './fifthsection.component.html',
  styleUrls: ['./fifthsection.component.css']
})
export class FifthSection {
mapOptions: google.maps.MapOptions = {
    center: { lat: 52.52346922653795, lng: 13.413399073765264 },
    zoom: 12,
    zoomControl: false,
       mapTypeControl: false,
       streetViewControl: false,
       fullscreenControl: false
  };

panelOpenState = false;

showFiller = false;

}
