import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Advert } from '../interfaces/Advert';

@Injectable({
  providedIn: 'root'
})



export class AdvertService {

  BASE_URL = "http://192.168.43.226:9000/api"

  constructor(private http: HttpClient) { }

  createAdvert(advert: Advert) {
    console.log(advert);
    delete advert.files


    return this.http.post(`${this.BASE_URL}/adverts`, { ad: advert }, {}).pipe()
  }

  getAdverts() {
    return this.http.get(`${this.BASE_URL}/adverts`).pipe()
  }

  getAdvert(_id) {
    return this.http.get(`${this.BASE_URL}/adverts/${_id}`).pipe()
  }


}
