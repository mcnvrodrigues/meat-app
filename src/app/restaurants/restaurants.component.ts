import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurant.service';

@Component({
  selector: 'meat-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  //inicialização 
  restaurants: Restaurant[] = []

  //injeção de dependência
  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.restaurantsService.getRestaurants();
  }
}
