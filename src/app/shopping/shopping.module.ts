import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    ProductsComponent,
    WishlistComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ShoppingModule { }
