import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';
import { Stat } from '../../models/stat';

@Component({
  selector: 'pm-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() selectedCharacter;

  characterStats: Stat[] = [
    new Stat('Strength', 12),
    new Stat('Dexterity', 20),
    new Stat('Wisdom', 14),
    new Stat('Perception', 13),
    new Stat('Charisma', 10)
  ];

  characterDefenses: Stat[] = [
    new Stat('Physical Defense', 12),
    new Stat('Physical Armor', 13),
    new Stat('Physical Threshold', 13),
    new Stat('Spell Defense', 20),
    new Stat('Mystic Armor', 20),
    new Stat('Mystic Threshold', 13),
    new Stat('Social Defense', 14)
  ];

  characterOther: Stat[] = [
    new Stat('Karma', 50),
    new Stat('Unconscious', 12),
    new Stat('Death', 13),
    new Stat('Recovery Tests', 13)
  ];

  ngOnInit() {}

  // Placeholder
  getStep(value: number) {
    return value / 2;
  }
}
