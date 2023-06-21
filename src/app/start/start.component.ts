import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-first',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
mapOptions: google.maps.MapOptions = {
    center: { lat: 52.52346922653795, lng: 13.413399073765264 },
    zoom: 12,
    zoomControl: false,
       mapTypeControl: false,
       streetViewControl: false,
       fullscreenControl: false
  };
showFiller = false;
}
