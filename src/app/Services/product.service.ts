import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private baseUrl: string) { }

  // Obs à cause de la requête HTTP
  getProducts(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}/products`)
      .pipe(
        // Re-hydrate
        map((productArray: any[]) => productArray.map(productData => new Product(productData)))
      );
  }

  getProduct(productId: number): Observable<Product> {
  //  return EMPTY;
    return this.http.get(`${this.baseUrl}/products/${productId}`)
    .pipe(
      map((productData: any) => new Product(productData)),
      catchError(this.muteRequestError)
    );
  }

  getProductBySlug(slug: string): Observable <Product> {
    //  return EMPTY;
      return this.http.get(`${this.baseUrl}/products?/${slug}`)
      .pipe(
        map(results => results[0]), // garde le premier objet dans la liste des obj renvoyés
        map((productData: any) => new Product(productData)),
        catchError(this.muteRequestError)
      );
    }

  decrementStock(productId: number, numUnits: number) {
  }

    // Catch (and rethrow).
    private muteRequestError(err: any): Observable<any> {
      const errorMsg = `${err.statusText} (${err.status})`;
      return of(null);
      // return Observable.throw(new Error(errorMsg));
    }

}
