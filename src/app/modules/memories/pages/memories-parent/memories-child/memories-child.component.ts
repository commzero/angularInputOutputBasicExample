import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-memories-child',
  templateUrl: './memories-child.component.html',
  styleUrls: ['./memories-child.component.css']
})
export class MemoriesChildComponent implements OnInit {

  @Output() numberGenerated = new EventEmitter<number>();

  @Input() memory: string;

  ngOnInit() {
  }

  generateNumber() {
    const randomNumber = Math.random();
    this.numberGenerated.emit(randomNumber);
  }

}
