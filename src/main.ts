import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import Mapboxgl from 'mapbox-gl';

// Mapboxgl.accessToken = 'pk.eyJ1IjoiYWVzcGlub3phcjE5IiwiYSI6ImNsbndlaGgyZDA3Y3Eyam82MmNiYTRiOHAifQ.fvvTeJ6mxwra1P1RIFS2Rw';

if ( !navigator.geolocation ) {
  alert('Navegador dont support Geolocation!');
  throw new Error('Navegador dont support Geolocation!');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
