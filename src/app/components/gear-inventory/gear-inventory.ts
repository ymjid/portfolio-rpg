import { Component, OnInit } from '@angular/core';
import { Gear, Rarety, USERGEAR } from '../../data/quests.data';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-gear-inventory',
  imports: [NgClass],
  templateUrl: './gear-inventory.html',
  styleUrl: './gear-inventory.scss',
})
export class GearInventory {
  protected readonly UserGear = USERGEAR;
  protected readonly Rarety = Rarety;
  InventorySize = {
    width : 24,
    height: 12,
  };
  SlotSize = {
    width:2,
    height:2,
  }
  inventorySlot: number = (this.InventorySize.width/this.SlotSize.width) * (this.InventorySize.height/this.SlotSize.height);
  inventorySlots = Array(this.inventorySlot).fill(null);
  InventoryCSS: string = `width:${this.InventorySize.width}rem; height:${this.InventorySize.height}rem;`;
  SlotCSS: string = `width:${this.SlotSize.width}rem; height:${this.SlotSize.height}rem;`

  getGearAtSlot(index: number): Gear | undefined {
    return this.UserGear.find(gear => gear.slot === index);
}

getGearStyle(gear: Gear): string {
const col = gear.slot % 12;
    const row = Math.floor(gear.slot / 12);
    const slotSize = 2; // 2rem par case
    const gap = 0; // gap entre les cases
    
    const left = col * (slotSize + gap);
    const top = row * (slotSize + gap);
    const width = gear.width * slotSize + (gear.width - 1) * gap;
    const height = gear.height * slotSize + (gear.height - 1) * gap;
    
    return `left: ${left}rem; top: ${top}rem; width: ${width}rem; height: ${height}rem;`;
}
}
