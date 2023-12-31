import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { Feature } from '../../interfaces/places.interfaces';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public selectedId: string = '';

  constructor(
    private mapService: MapService,
    private placesService: PlacesService,
    ) { }

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  flyTo( place: Feature ): void {
    this.selectedId = place.id;
    const [ lng, lat ] = place.center;
    this.mapService.flyTo([ lng, lat ]);
  }

  getDirections( place: Feature ) {
    if ( !this.placesService.userLocation ) throw Error('No have a userLocation!');

    this.placesService.deletePlaces();

    const start = this.placesService.userLocation;
    const end = place.center as [number, number];

    this.mapService.getRouteBetweenPoints(start, end);
  }

}
