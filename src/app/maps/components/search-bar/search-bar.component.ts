import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService ) { }

  onQueryChanged( query: string = '' ) {
    // console.log( query );
    if( this.debounceTimer ) clearTimeout( this.debounceTimer );
    this.debounceTimer = setTimeout( () => {
      // console.log('El valor de la query:', query);
      this.placesService.getPlacesByQuery( query );
    }, 2000 );

  }

}
