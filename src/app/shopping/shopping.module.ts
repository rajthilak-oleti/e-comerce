import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingBagComponent,
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ShoppingModule { }
