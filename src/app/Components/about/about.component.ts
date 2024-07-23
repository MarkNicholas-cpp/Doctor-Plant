import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  historyData = [
    { year: 1981, state: 'Initial launch of the company',bg:"bg-support" },
    { year: 1991, state: 'Expansion into new markets',bg:"bg-support" },
    { year: 2001, state: 'Major product innovation',bg:"bg-support" },
    { year: 2011, state: 'Global acquisition and growth',bg:"bg-support" },
    { year: 2021, state: 'Sustainability initiatives and modernization',bg:"bg-support" },
    { year: 2024, state: 'And our Comany is still Giving the opportunity to develop',bg:"bg-support" }
  ];
}
