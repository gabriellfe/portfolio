import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [IonicModule]
})
export class PortfolioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
