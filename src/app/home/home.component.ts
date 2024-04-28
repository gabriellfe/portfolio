import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonicModule, NgScrollbarModule, RouterLink, RouterLinkActive, RouterOutlet]
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  downloadCV(){
    

  }
}
