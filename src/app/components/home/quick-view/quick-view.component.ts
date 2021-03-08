import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit , Inject } from '@angular/core';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent implements OnInit {

 

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

}
