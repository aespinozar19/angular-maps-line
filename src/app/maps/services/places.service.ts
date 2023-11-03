
import { Injectable } from '@angular/core';
import { PlacesResponse, Feature } from '../interfaces/places.interfaces';
import { PlacesApiClient } from '../api';
import { MapService } from './map.service';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];
  // public isLoading

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor(
    private mapService: MapService,
    private placesApi: PlacesApiClient,
    ) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation =  [ coords.longitude, coords.latitude ];
          resolve(this.userLocation);
        },
        ( err ) => {
          alert('Could not obtain geolocation');
          console.log( err );
          reject();
        } )
    } );
  }

  getPlacesByQuery( query: string = '' ) {

    //ToDO: Evaluar cuando query es vacio
    if( query.length === 0 ) {
      this.places = [];
      this.isLoadingPlaces = false;
      return
    };

    if ( !this.userLocation ) throw Error('userLocation not have value');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>( `/${ query }.json`, {
        params: {
          proximity: this.userLocation.join(',')
        }
      } )
      .subscribe( resp => {
        this.isLoadingPlaces = false;
        this.places = resp.features;

        this.mapService.createMarkersFromPlaces( this.places, this.userLocation! );
      });

  }

  deletePlaces() {
    this.places = [];
  }

}
