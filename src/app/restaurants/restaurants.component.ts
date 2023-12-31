import { Component } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'meat-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent {
  restaurants: Restaurant[] = [
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png"     
    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png"      
    },
    {
      id: "coffee-corner",
      name: "Coffee Corner",
      category: "Coffee Shop",
      deliveryEstimate: "30-40m",
      rating: 4.8,
      imagePath: "assets/img/restaurants/coffeecorner.png"     
    },
    {
      id: "green-food",
      name: "Green Food",
      category: "Saudável",
      deliveryEstimate: "75m",
      rating: 4.1,
      imagePath: "assets/img/restaurants/greenfood.png"     
    },
    {
      id: "ice-cream",
      name: "Ice Cream",
      category: "Ice Creams",
      deliveryEstimate: "40-65m",
      rating: 4.5,
      imagePath: "assets/img/restaurants/icy.png"
     
    },
    {
      id: "tasty-treats",
      name: "Tasty Treats",
      category: "Doces",
      deliveryEstimate: "20m",
      rating: 4.4,
      imagePath: "assets/img/restaurants/tasty.png"  
    }
  ]
}
