import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableItemService {
  numbers = [
    {
      type: 'number',
      value: 1,
      color: '#f00'
    },
    {
      type: 'number',
      value: 2,
      color: '#000'
    },
    {
      type: 'number',
      value: 3,
      color: '#f00'
    },
    {
      type: 'number',
      value: 4,
      color: '#000'
    },
    {
      type: 'number',
      value: 5,
      color: '#f00'
    },
    {
      type: 'number',
      value: 6,
      color: '#000'
    },
    {
      type: 'number',
      value: 7,
      color: '#f00'
    },
    {
      type: 'number',
      value: 8,
      color: '#000'
    },
    {
      type: 'number',
      value: 9,
      color: '#f00'
    },
    {
      type: 'number',
      value: 10,
      color: '#000'
    },
    {
      type: 'number',
      value: 11,
      color: '#000'
    },
    {
      type: 'number',
      value: 12,
      color: '#f00'
    },
    {
      type: 'number',
      value: 13,
      color: '#000'
    },
    {
      type: 'number',
      value: 14,
      color: '#f00'
    },
    {
      type: 'number',
      value: 15,
      color: '#000'
    },
    {
      type: 'number',
      value: 16,
      color: '#f00'
    },
    {
      type: 'number',
      value: 17,
      color: '#000'
    },
    {
      type: 'number',
      value: 18,
      color: '#f00'
    },
    {
      type: 'number',
      value: 19,
      color: '#f00'
    },
    {
      type: 'number',
      value: 20,
      color: '#000'
    },
    {
      type: 'number',
      value: 21,
      color: '#f00'
    },
    {
      type: 'number',
      value: 22,
      color: '#000'
    },
    {
      type: 'number',
      value: 23,
      color: '#f00'
    },
    {
      type: 'number',
      value: 24,
      color: '#000'
    },
    {
      type: 'number',
      value: 25,
      color: '#f00'
    },
    {
      type: 'number',
      value: 26,
      color: '#000'
    },
    {
      type: 'number',
      value: 27,
      color: '#f00'
    },
    {
      type: 'number',
      value: 28,
      color: '#000'
    },
    {
      type: 'number',
      value: 29,
      color: '#000'
    },
    {
      type: 'number',
      value: 30,
      color: '#f00'
    },
    {
      type: 'number',
      value: 31,
      color: '#000'
    },
    {
      type: 'number',
      value: 32,
      color: '#f00'
    },
    {
      type: 'number',
      value: 33,
      color: '#000'
    },
    {
      type: 'number',
      value: 34,
      color: '#f00'
    },
    {
      type: 'number',
      value: 35,
      color: '#000'
    },
    {
      type: 'number',
      value: 36,
      color: '#f00'
    }
  ];

  evenOdd = [
    {
      type: 'evenOdd',
      value: 'even',
      color: 'transparent'
    },
    {
      type: 'evenOdd',
      value: 'odd',
      color: 'transparent'
    },
  ];
  colors = [
    {
      type: 'color',
      value: '',
      color: '#f00'
    },
    {
      type: 'color',
      value: '',
      color: '#000'
    }
  ];
  sectors = [
    {
      type: 'sectors',
      value: '1 st 12',
      color: 'transparent'
    },
    {
      type: 'sectors',
      value: '2 nd 12',
      color: 'transparent'
    },
    {
      type: 'sectors',
      value: '3 rd 12',
      color: 'transparent'
    }
  ];


  constructor() {
  }
}
