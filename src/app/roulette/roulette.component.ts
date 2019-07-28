import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TableItemService} from '../services/table-item.service';
interface SelectedBet {
  value: string | number;
  type: string;
  color: string;
}

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {
  @ViewChild('imgRef') imgRef: ElementRef;
  deg;
  time: string;
  number = 0;
  rand;
  numbers = [];
  selectedItem = {
    number: null,
    color: null
  };
  selectedBet: SelectedBet | null;
  wallet = 2000;
  count = 100;
  evenOdd = [];
  colors = [];
  chipType;
  even: boolean;
  sectors = [];
  inProgress = false;


  constructor(private itemService: TableItemService) {
  }

  ngOnInit() {
    this.numbers = this.itemService.numbers;
    this.evenOdd = this.itemService.evenOdd;
    this.colors = this.itemService.colors;
    this.sectors = this.itemService.sectors;
  }

  startGame() {
    this.wallet -= this.count;
    this.inProgress = true;
    this.number = Math.floor(400 + Math.random() * (1000 + 1 - 400));
    this.time = '2s';
    this.deg = `rotate(${this.number}deg)`;
    this.rand = Math.floor(Math.random() * this.numbers.length);
    console.log(this.numbers[this.rand]);

    if (this.selectedBet.type === 'number') {
      this.checkNumber();
    }
    if (this.selectedBet.type === 'color') {
      this.checkColor();
    }
    this.even = this.numbers[this.rand].value % 2 === 0;
    if (this.selectedBet.type === 'evenOdd') {
      this.checkEvenOdd();
    }
    if (this.selectedBet.type === 'sectors') {
      this.checkSectors();
    }
    setTimeout(() => {
      this.inProgress = false;
    }, 2000);

  }

  checkNumber() {
    if (this.selectedBet.value === this.numbers[this.rand].value) {
      this.wallet = +this.wallet + +this.count * 36;
    }


  }

  checkColor() {
    if (this.selectedBet.color === this.numbers[this.rand].color) {
      this.wallet = +this.wallet + +this.count * 2;
    }
  }

  checkEvenOdd() {
    if (this.selectedBet.value === 'even' && this.even) {
      this.wallet = +this.wallet + +this.count * 2;
    } else if (this.selectedBet.value === 'odd' && !this.even) {
      this.wallet = +this.wallet + +this.count * 2;
    }
  }

  checkSectors() {
    if (this.selectedBet.value === '1 st 12' && this.numbers[this.rand].value < 13) {
      this.wallet = +this.wallet + +this.count * 3;
    } else if (this.selectedBet.value === '2 nd 12' && this.numbers[this.rand].value < 25 && this.numbers[this.rand].value > 12) {
      this.wallet = +this.wallet + +this.count * 3;
    } else if (this.selectedBet.value === '3 rd 12' && this.numbers[this.rand].value > 24) {
      this.wallet = +this.wallet + +this.count * 3;
    }
  }

  onSelectItem(i, item, list: string) {
    this.selectedItem[list] = i;
    this.selectedBet = item;
    this.chipType = list;
    console.log(item);
  }

  changeCount(i) {
    this.count = +this.count + i;
  }

}
