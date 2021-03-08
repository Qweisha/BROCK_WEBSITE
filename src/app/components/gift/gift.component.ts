import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
    range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

}
