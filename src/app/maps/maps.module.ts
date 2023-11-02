import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environments';
// (mapboxgl as any).accessToken = 'pk.eyJ1IjoiYWVzcGlub3phcjE5IiwiYSI6ImNsbndkeHV0bDA2NzUyaG1xaGI1NWhxcGgifQ.d3Ns3Aan6dcoAYvY4SvXNA';
(mapboxgl as any).accessToken = environment.mapbox_key;


@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent,
  ]
})
export class MapsModule { }
