import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  productData: any;
  showSpinner: boolean = false;
  selectedProduct: any = {
    category: '',
    id: ''
  }
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  // ngOnChanges(changes: SimpleChanges) {
  //   for (const propName of Object.keys(changes)) {
  //     let change = changes[propName];
  //     if (propName === 'productData') {
  //       if (change.currentValue !== change.previousValue) {
  //         if(this.selectedProduct) {
  //           console.log(this.selectedProduct);
  //           this.getSelectedProductData();
  //         }

  //       }
  //     }
  //   }
  // }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if(params && params.category && params.id) {
      this.selectedProduct.category = params.category;
      this.selectedProduct.id = params.id;
      this.getSelectedProductData();
    }
  }

  getSelectedProductData() {
    const selectedProductId = this.selectedProduct['id'];
    this.productService.getProductDetailsById(selectedProductId)
    .subscribe((res: any) => {
      if(res) {
        this.productData = res;
        console.log('productData -> ', this.productData);
      } else {
        this.productData = null;
      }
    }, e => {
      console.log(e);
      this.productData = null;
    })
  }

}
