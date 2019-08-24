import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Advert } from '../interfaces/Advert';
import { Client } from '../interfaces/Client';

@Injectable({
  providedIn: 'root'
})



export class CompanyService {

  BASE_URL = "http://192.168.43.226:9000/api"

  constructor(private http: HttpClient) { }

  createCompany(company: Client) {
    return this.http.post(`${this.BASE_URL}/companies`, { company: company }, {}).pipe()
  }

  getCompanies() {
    return this.http.get(`${this.BASE_URL}/companies`).pipe()
  }

  getCompany(companyId) {
    return this.http.get(`${this.BASE_URL}/companies/${companyId}`).pipe()
  }


}
