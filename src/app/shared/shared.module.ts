import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SpinnerComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
