import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ProductsComponent } from './shopping/products/products.component';
import { ShoppingBagComponent } from './shopping/shopping-bag/shopping-bag.component';
import { WishlistComponent } from './shopping/wishlist/wishlist.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'shopping-bag', component: ShoppingBagComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
