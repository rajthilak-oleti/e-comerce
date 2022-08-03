import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { CartComponent } from './shopping/cart/cart.component';
import { ProductOverviewComponent } from './shopping/product-overview/product-overview.component';
import { ProductsComponent } from './shopping/products/products.component';
import { WishlistComponent } from './shopping/wishlist/wishlist.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'overview', component: ProductOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
