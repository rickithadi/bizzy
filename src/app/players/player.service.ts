import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYER_ITEMS } from './player_data';
import { findIndex } from 'lodash';

@Injectable()
export class PlayerService {
  private pItems = PLAYER_ITEMS;

  getPlayersFromData(): Player[] {
    console.log(this.pItems);
    return this.pItems;
  }

  addPlayer(player: Player) {
    this.pItems.push(player);
    console.log(this.pItems);
  }

  updatePlayer(player: Player) {
    let index = findIndex(this.pItems, (p: Player) => {
      return p.id === player.id;
    });
    this.pItems[index] = player;
    console.log(this.pItems);
  }

  deletePlayer(player: Player) {
    this.pItems.splice(this.pItems.indexOf(player), 1);
    console.log(this.pItems);
  }

}

