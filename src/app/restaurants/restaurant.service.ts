import { Injectable } from "@angular/core"
import { MEAT_API } from "../app.api"
import { Restaurant } from "./restaurant/restaurant.model"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable()
export class RestaurantsService {

    rests: Restaurant[] = [
        {
            "id": "bread-bakery",
            "name": "Bread & Bakery",
            "category": "Bakery",
            "deliveryEstimate": "25m",
            "rating": 4.9,
            "imagePath": "assets/img/restaurants/breadbakery.png",
        },
        {
            "id": "burger-house",
            "name": "Burger House",
            "category": "Hamburgers",
            "deliveryEstimate": "100m",
            "rating": 3.5,
            "imagePath": "assets/img/restaurants/burgerhouse.png"
        }
    ]

    constructor(private http: HttpClient) { }

    getRestaurants(): Restaurant[] {
        return this.rests
    }

    restaurants(): Observable<Restaurant[]>{
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
    }
}