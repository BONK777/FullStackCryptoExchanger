import { Component } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  dataCurrency: {id: number, name: string, icon: string, category: string, coin: number, rub: number, usd: number, eur: number, kzt: number, uah: number}[] = [...data]
  constructor() { }

}
