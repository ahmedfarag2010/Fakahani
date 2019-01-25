import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../shared/app-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products = []

  constructor(private _service: AppServiceService) { }

  ngOnInit() {
    this._service.getData()
    .subscribe(data => {
      this.products = data
    })
  }

}
