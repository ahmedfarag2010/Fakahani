import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppServiceService } from '../shared/app-service.service'
import { ProductsService } from '../services/products.service';
import { Product } from '../shared/product-interface'
import { Subscription } from 'rxjs';
import { CardService } from '../services/card.service';
import { AuthService } from '../services/auth.service';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = []
  productsObservable: Subscription
  indexProductNumber = -1

  constructor(
    private _productsService: ProductsService,
    private _cardService: CardService,
    private _authService: AuthService,
    private _router:Router) { }


  ngOnInit() {
    this.productsObservable = this._productsService.getProducts().subscribe(data => {
      this.products = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
    })
  }

  ngOnDestroy() {
    this.productsObservable.unsubscribe()
  }

  buy(index: number, quantity: number) {
    if (this._authService.userId) {
      this.indexProductNumber = +index
      let selectedProduct = this.products[this.indexProductNumber]
      //console.log(selectedProduct)

      let data = {
        name: selectedProduct.name,
        quantity: +quantity,
        price: selectedProduct.price
      }


      this._cardService.addToCard(data)
        .then(() => {
          this.indexProductNumber = -1
        })
    } else {
      alert('you are not logged in')
      this._router.navigate(['/login'])
    }

  }

}
