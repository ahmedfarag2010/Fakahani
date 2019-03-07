import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Shopping } from '../shared/shopping.interface';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  card:Shopping[] = []

  constructor(private _cardService:CardService) { }

  ngOnInit() {
    this._cardService.getOrders().subscribe(card=>{
      this.card = card.map(shopping =>{
        return{
          id:shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      })
      console.log(this.card)
    })
  }

  delete(index){
    this._cardService.delete(this.card[index].id)
  }

  save(index){
    this._cardService.save(this.card[index].id,this.card[index].quantity)
  }

}
