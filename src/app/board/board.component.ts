import { Component, OnInit } from '@angular/core';
import { Board } from '../shared/models/board.model';
import { BoardService } from '../shared/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(private boardService:BoardService) { }

  ngOnInit(): void {
    // copie par référence, donc quand on modifie la Data en mémoire
    // ==> on modifie aussi la variable this.board
    // ça ne marcherait pas si on avait fait this.board = [...tab-data]
    this.board = this.boardService.getBoard();
    console.log(this);
  }

  /**
   * Adds list
   */
  addList():void {
    let nameList = window.prompt("Renseignez un nom de liste");
    this.boardService.createList(nameList);
  }

  /**
   * Dels list
   * @param id 
   */
  delList(id) {
    this.boardService.deletelist(id);
  }
}
