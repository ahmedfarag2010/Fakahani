import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppServiceService } from '../shared/app-service.service'
import { ProductsService } from '../services/products.service';
import { Product } from '../shared/product-interface'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnDestroy {

  products:Product[] = []
  productsObservable: Subscription

  constructor(private _productsService : ProductsService) { }


  // startOrder(){
  //   if(this._service.islogged == false){
  //     alert('you are not logged, please login first')
  //   } else {
  //     alert('start order')
  //   }
  // }

  ngOnInit() {
    // this._service.getProducts()
    // .subscribe(data => {
    //   this.products = data
    // })
    this.productsObservable = this._productsService.getProducts().subscribe(data => {
      this.products = data.map(element => {
        return{
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
    })
  }

  ngOnDestroy(){
    this.productsObservable.unsubscribe()
  }

}
