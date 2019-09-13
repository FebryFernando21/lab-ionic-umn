import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'https://www.lamudi.co.id/static/media/bm9uZS9ub25l/2x2x5x880x396/e2c804a7cf808c.jpg',
      10000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://investproperti.com/wp-content/uploads/2017/07/casa-de-parco-bsd-apartment.jpg',
      12410000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'https://jendela360.com/gallery/apartment/entrance5b7a4f3b5f501_thumb.jpg',
      12410000
    ),
  ];

  get places() {
    return [...this._places];
  }
}
