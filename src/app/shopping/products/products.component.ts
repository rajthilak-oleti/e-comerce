import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categoriesList: any[] = [];
  productsList: any[] = [];
  showSpinner: boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.showSpinner = true;
    this.productService.getCategories()
    .subscribe((res: any) => {
      if(res && res.length > 0) {
        this.categoriesList = res;
      } else {
        this.categoriesList = [];
      }
      this.showSpinner = false;
    }, e => {
      this.showSpinner = false;
      this.categoriesList = [];
      console.log('error ', e.error);
    })
  }

  getProductsOfCategory(category: string) {
    this.showSpinner = true;
    this.productService.getProductsOfCategory(category)
    .subscribe((res: any) => {
      if(res && res.length > 0) {
        this.checkForWishlistedProducts(res);
        this.productsList = res;
      } else {
        this.productsList = [];
      }
      this.showSpinner = false;
    }, e => {
      this.showSpinner = false;
      this.productsList = [];
      console.log('error ', e.error);
    });
  }

  checkForWishlistedProducts(res :any[]) {
    const wishlist = localStorage.getItem('wishlist');
    let wishlistArray: any = wishlist ? JSON.parse(wishlist) : [];
    wishlistArray.forEach((wishlistedItemData: any) => {
      res.forEach((productData: any) => {
        productData['title'] == wishlistedItemData['title'] &&
          productData['id'] == wishlistedItemData['id'] ? productData['isWishlisted'] = true : '';
      });
    });
  }

  manageProductForWishlist(selectedProduct: any) {
    this.productsList.forEach((productData: any) => {
      if(productData['title'] === selectedProduct['title'] && productData['id'] === selectedProduct['id']) {
        productData['isWishlisted'] = productData['isWishlisted'] ? false : true;
        this.manageWishlistProductFromStore(productData, productData['isWishlisted'])
      }
    });
    
  }

  manageWishlistProductFromStore(data: any, addToWishlist: boolean) {
    let wishlist = localStorage.getItem('wishlist');
    let wishlistArray: any = wishlist ? JSON.parse(wishlist) : [];
    if(wishlistArray && wishlistArray.length > 0) {
      if(addToWishlist) {
        wishlistArray.push(data);
        localStorage.setItem('wishlist', JSON.stringify(wishlistArray));
      } else {
        const targetIndex = wishlistArray.findIndex((wishlistItem: any) => {
          return wishlistItem['title'] == data['title'] && wishlistItem['id'] == data['id'];
        });
        if(targetIndex >= 0) {
          wishlistArray.splice(targetIndex, 1);
          localStorage.setItem('wishlist', JSON.stringify(wishlistArray));
        }
      } 
    } else {
      if(addToWishlist) {
        wishlistArray.push(data);
        localStorage.setItem('wishlist', JSON.stringify(wishlistArray));
      }
    }
  }

  addProductToCart(selectedProduct: any) {
    let cart = localStorage.getItem('itemsInCart');
    let itemsInCart: any = cart ? JSON.parse(cart) : [];
    itemsInCart.push(selectedProduct);
    localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
  }

}
