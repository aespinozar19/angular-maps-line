import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import { Map } from 'mapbox-gl';

// (mapboxgl as any).accessToken = 'pk.eyJ1IjoiYWVzcGlub3phcjE5IiwiYSI6ImNsbndkeHV0bDA2NzUyaG1xaGI1NWhxcGgifQ.d3Ns3Aan6dcoAYvY4SvXNA';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit {

  constructor( private placesService: PlacesService ) {}

  @ViewChild('map') divMap?: ElementRef;

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log( this.placesService.userLocation );
    console.log('Finish ngOnInit');
  }

  ngAfterViewInit(): void {

    console.log('ngAfterViewInit');

    console.log( this.divMap );
    if ( !this.divMap ) throw 'El elemtno HTML no fue encontrado';

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });

    console.log('Finish ngAfterViewInit');

  }

}
