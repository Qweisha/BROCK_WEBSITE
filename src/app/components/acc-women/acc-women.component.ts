import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuickViewComponent } from '../home/quick-view/quick-view.component';

@Component({
  selector: 'app-acc-women',
  templateUrl: './acc-women.component.html',
  styleUrls: ['./acc-women.component.css']
})
export class AccWomenComponent implements OnInit {

  products: any[] = [
    { id: 1, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/accwomen1.jpg', rates: 0 },
    { id: 2, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/accwomen5.jpg', rates: 0 },
    { id: 3, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/accwomen3.png', rates: 0 },
    { id: 4, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/accwomen4.jpg', rates: 0 },
    { id: 10, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/accwomen5.jpg', rates: 0 },
    { id: 4, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/accwomen4.jpg', rates: 0 },
    { id: 1, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/accwomen1.jpg', rates: 0 },
    { id: 3, kind: 'women', name: 'Product name', price: 165.10, srcImg: './assets/accwomen3.png', rates: 0 },
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
