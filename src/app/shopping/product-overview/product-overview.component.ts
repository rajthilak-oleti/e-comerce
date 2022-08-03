import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  selectedProduct: any;
  productData: any;
  showSpinner: boolean = false;
  constructor(private productService: ProductService) { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName of Object.keys(changes)) {
      let change = changes[propName];
      if (propName === 'productData') {
        if (change.currentValue !== change.previousValue) {
          if(this.selectedProduct) {
            console.log(this.selectedProduct);
            this.getSelectedProductData();
          }

        }
      }
    }
  }

  ngOnInit(): void {
  }

  getSelectedProductData() {
    const selectedProductId = this.selectedProduct['id'];
    this.productService.getProductDetailsById(selectedProductId)
    .subscribe((res: any) => {
      if(res) {
        this.productData = res;
      } else {
        this.productData = null;
      }
    }, e => {
      console.log(e);
      this.productData = null;
    })
  }

}
