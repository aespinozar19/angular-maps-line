import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService } from '../../services/map.service';

// (mapboxgl as any).accessToken = 'pk.eyJ1IjoiYWVzcGlub3phcjE5IiwiYSI6ImNsbndkeHV0bDA2NzUyaG1xaGI1NWhxcGgifQ.d3Ns3Aan6dcoAYvY4SvXNA';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  constructor(
    private placesService: PlacesService,
    private mapService: MapService,
  ) {}

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'The element HTML not found';
    if ( !this.placesService.userLocation ) throw 'The user location not found';

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation,  // [-74.5, 40], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({ color: 'red' })
      .setLngLat( this.placesService.userLocation )
      .setPopup( popup )
      .addTo( map );

    this.mapService.setMap( map );

  }

}
