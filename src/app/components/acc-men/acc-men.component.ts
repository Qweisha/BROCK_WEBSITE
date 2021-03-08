import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuickViewComponent } from '../home/quick-view/quick-view.component';

@Component({
  selector: 'app-acc-men',
  templateUrl: './acc-men.component.html',
  styleUrls: ['./acc-men.component.css']
})
export class AccMenComponent implements OnInit {

  products: any[] = [
   
    { id: 5, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/accmen1.jpg', rates: 0 },
    { id: 8, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/accmen2.jpg', rates: 0 },
    { id: 9, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/accmen3.jpg', rates: 0 },
    { id: 11, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/accmen4.jpg', rates: 0 },
    { id: 6, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/accmen5.jpg', rates: 0 },
    { id: 8, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/accmen6.jpg', rates: 0 },
    { id: 6, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/accmen1.jpg', rates: 0 },
    { id: 5, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/accmen3.jpg', rates: 0 },
  ];


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(public dialog: MatDialog) { }
  openDialog(d, n, p, s) {
    this.dialog.open(QuickViewComponent, {
      data:
        { id: d, name: n, price: p, srcImg: s }
    });
   
  }


}
