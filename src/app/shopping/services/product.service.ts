import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categoriesUrl: string = 'https://fakestoreapi.com/products/categories';
  productsUrl: string = 'https://fakestoreapi.com/products/category'
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.categoriesUrl);
  };

  getProductsOfCategory(selectedCategory: string) {
    return this.http.get(this.productsUrl + '/' + selectedCategory)
  }
  
}
