import { Component, Input} from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'meat-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent {

  @Input() restaurant: Restaurant = {
    id: '',
    name: '',
    category: '',
    deliveryEstimate: '',
    rating: 0,
    imagePath: ''
  }

}
