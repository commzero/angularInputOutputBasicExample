import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memories-parent',
  templateUrl: './memories-parent.component.html',
  styleUrls: ['./memories-parent.component.css']
})
export class MemoriesParentComponent implements OnInit {

  memoryText: string;

  randomNumber: number;

  ngOnInit() {
  }

  public onNumberGenerated(randomNumber: number) {
    this.randomNumber = randomNumber;
  }

}
