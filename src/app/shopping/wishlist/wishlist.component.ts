import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist: any[] = [];
  showSpinner: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist') || '');
  }

  removeFromWishlist(productData: any) {
    this.showSpinner = true;
    let wishlist = localStorage.getItem('wishlist');
    let wishlistArray: any = wishlist ? JSON.parse(wishlist) : [];
    this.wishlist = this.removeElementFromList(this.wishlist, productData);
    wishlistArray = this.removeElementFromList(wishlistArray, productData)
    localStorage.setItem('wishlist', JSON.stringify(wishlistArray));
    this.showSpinner = false;
  }

  removeElementFromList(collection: any[], targetElement: any) {
    if(collection && collection.length > 0) {
      const targetIndex = collection.findIndex((wishlistItem: any) => {
        return wishlistItem['title'] == targetElement['title'] && wishlistItem['id'] == targetElement['id']
      });
      if(targetIndex >= 0) {
        collection.splice(targetIndex, 1);
      }
    }
    return collection;
  }

}
