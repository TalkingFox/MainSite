import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snail',
  templateUrl: './snail.component.html',
  styleUrls: ['./snail.component.scss']
})
export class SnailComponent implements OnInit {

  constructor() { }

  public notes = 'Snail Maze is the best! This game was developed in Typescript using the Phaser framework. ' +
                 'Special thanks to Cristian Bote for his work on the Phaser-State-Transition plugin.';

  ngOnInit() {
  }

}
