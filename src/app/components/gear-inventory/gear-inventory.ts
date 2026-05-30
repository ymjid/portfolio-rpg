import { Component } from '@angular/core';
import { USERGEAR } from '../../data/quests.data';


@Component({
  selector: 'app-gear-inventory',
  imports: [],
  templateUrl: './gear-inventory.html',
  styleUrl: './gear-inventory.scss',
})
export class GearInventory {
  protected readonly UserGear = USERGEAR;
  InventorySize = {
    width : 20,
    height: 4,
  };
  SlotSize = {
    width:2,
    height:2,
  }
  inventorySlot: number = (this.InventorySize.width/this.SlotSize.width) * (this.InventorySize.height/this.SlotSize.height);
  inventorySlots = Array(this.inventorySlot).fill(null);

}
