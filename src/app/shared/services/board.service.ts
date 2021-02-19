import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { data } from '../models/data';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  
/**
 * Data  of board service
 */
private data:Board = data;

  constructor() { }

  /**
   * @return Board
   */
  getBoard():Board {
    return this.data;
  }

  /**
   * Crée une nouvelle liste
   */
  createList(name: string):void {
    let newList = {id: Date.now(), name: name, cards:[]};
    this.data.push(newList);
  }
  /**
   * Deletelists board service
   * @param idList 
   */
  deletelist(idList:number):void {
    let index = this.data.findIndex( list => list.id === idList);
    this.data.splice(index,1);
  }
  /**
   * Moves card
   * @param listId 
   * @param previousIndex 
   * @param currentIndex 
   */
  moveCard(listId,previousIndex,currentIndex ) {
    console.log("listId=",listId);
    console.log("PI=",previousIndex);
    console.log("CI=",currentIndex);
    let list = this.data.find(list => list.id === listId);
    moveItemInArray(list.cards,previousIndex,currentIndex );
  }
}
