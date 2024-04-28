import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, IonicModule , RouterLink, RouterLinkActive, RouterOutlet]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  status = false;
  addToggle() {
    this.status = !this.status;
  }
}
