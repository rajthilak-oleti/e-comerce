import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productData!: any;
  @Input() wishlistBtnRequired: boolean = false;
  @Input() removeBtnRequired: boolean = false;
  @Output() manageProductForWishlist: EventEmitter<any> = new EventEmitter();
  @Output() removeProductFromWishlist: EventEmitter<any> = new EventEmitter();
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName of Object.keys(changes)) {
      let change = changes[propName];
      if (propName === 'productData') {
        if (change.currentValue !== change.previousValue) {
          if (this.productData) {
            console.log(this.productData);
            this.formatProductData();
          }

        }
      }
    }
  }

  formatProductData() {
    if(!this.productData['isPriceConverted']) {
      this.productData['currency'] = this.productData['currency'] ? this.productData['currency'] : 'USD';
      this.productData['price'] = this.convertToINR(this.productData['price'], this.productData['currency']);
    }
  }

  convertToINR(price: any, currency: string) {
    price = parseInt(price);
    switch (currency) {
      case 'usd':
        return price * 78.28;
      
      case 'Yuan':
        return price * 11.71;
      
      default:
        return price.toString();
    }
  }

  floatIconBtnClicked(buttonType: string, selectedProduct: any) {
    buttonType == 'wishlist' ? this.manageProductForWishlist.emit(selectedProduct) : 
      this.removeProductFromWishlist.emit(selectedProduct)
  }

  addToCart(productData: any) {
    this.addToCartEvent.emit(productData);
  }

}
