import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearInventory } from './gear-inventory';

describe('GearInventory', () => {
  let component: GearInventory;
  let fixture: ComponentFixture<GearInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
