import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {

  @Output() public number: EventEmitter<string> = new EventEmitter<string>();
  @Output() public clickRefresh: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

}
