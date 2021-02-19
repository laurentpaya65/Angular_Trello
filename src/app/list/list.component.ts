import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { List } from '../shared/models/board.model';
import { BoardService } from '../shared/services/board.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: List;

  constructor(private boardService:BoardService) { }

  ngOnInit(): void {
    console.log(this);
  }

  drop(event) {
    console.log(event);
    this.boardService.moveCard(this.list.id ,event.previousIndex,event.currentIndex);
  }

}
