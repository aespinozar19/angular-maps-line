import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {


  constructor(
    private placesService: PlacesService,
    private mapService: MapService,
  ) {}

  goToMyLocation(): void {
    if ( !this.placesService.isUserLocationReady ) throw Error('Not get user ubication! ');
    if ( !this.mapService.isMapReady ) throw Error('Map not initialized! ');
    this.mapService.flyTo( this.placesService.userLocation! );
  }

}
