import { QuickViewComponent } from './quick-view/quick-view.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {



  products: any[] = [
    { id: 1, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/img1_thumbnail.jpg', rates: 0 },
    { id: 2, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/img3_thumbnail.jpg', rates: 0 },
    { id: 3, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/img4_thumbnail.jpg', rates: 0 },
    { id: 4, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/img2_thumbnail.jpg', rates: 0 },
    { id: 5, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/img5_thumbnail.jpg', rates: 0 },
    { id: 6, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/img6_thumbnail.jpg', rates: 0 },
    { id: 7, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/img3_thumbnail.jpg', rates: 0 },
    { id: 8, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/img7_thumbnail.jpg', rates: 0 },
    { id: 9, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/img8_thumbnail.jpg', rates: 0 },
    { id: 10, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/img3_thumbnail.jpg', rates: 0 },
    { id: 11, kind: 'men', name: 'Product name', price: 165.10, srcImg: './assets/img6_thumbnail.jpg', rates: 0 },
    { id: 12, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/img2_thumbnail.jpg', rates: 0 },
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
