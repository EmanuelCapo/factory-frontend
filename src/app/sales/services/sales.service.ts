import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleRequest, SaleResponse } from '../interfaces/sale-model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private api = 'http://localhost:8080/api/sales';

  constructor(private http: HttpClient) { }

  calculatePrice(request: SaleRequest): Observable<SaleResponse> {
    return this.http.post<SaleResponse>(
      `${this.api}/price`, request
    );
  }
}
