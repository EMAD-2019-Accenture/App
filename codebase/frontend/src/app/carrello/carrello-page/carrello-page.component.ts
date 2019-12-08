import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/model/cart';
import { CarrelloService } from '../carrello.service';
import { ScanService } from '../scan.service';

@Component({
  selector: 'app-carrello-page',
  templateUrl: './carrello-page.component.html',
  styleUrls: ['./carrello-page.component.scss'],
})
// tslint:disable: align
export class CarrelloPageComponent implements OnInit {

  cart: Cart;

  constructor(private carrelloService: CarrelloService,
    private scanService: ScanService) {
    this.cart = this.carrelloService.makeCart();
  }

  ngOnInit() {

  }

  public activateCart() {
    this.carrelloService.activateCart(this.cart);
  }

  public deactivateCart() {
    this.carrelloService.deactivateCart(this.cart);
  }

  public getTotalPrice() {
    return this.carrelloService.getTotalPrice(this.cart);
  }

  public getTotalQuantity() {
    return this.carrelloService.getTotalQuantity(this.cart);
  }

  public startScan() {
    const product = this.scanService.startScan();
    // Bisogna trovare un modo per mostrare la pagina dell'articolo
  }

  public deleteItem(index: number) {
    this.carrelloService.deleteItem(this.cart, index);
  }

  public increaseItem(index: number) {
    this.carrelloService.increaseItem(this.cart, index);
  }

  public decreaseItem(index: number) {
    this.carrelloService.decreaseItem(this.cart, index);
  }
}