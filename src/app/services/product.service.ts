import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 500) + 50,
        description: `Description of Product ${i + 1}`
      });
    }
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }
}
