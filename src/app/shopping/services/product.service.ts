import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'https://fakestoreapi.com/products/'
  categoriesUrl: string = `${this.baseUrl}categories`;
  productsUrl: string = `${this.baseUrl}category`;
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.categoriesUrl);
  };

  getProductsOfCategory(selectedCategory: string) {
    return this.http.get(this.productsUrl + '/' + selectedCategory)
  }

  getProductDetailsById(selectedProductId: string) {
    return this.http.get(this.baseUrl + '/' + selectedProductId);
  }
  
}
