import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-service',
  standalone: true,
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  imports: [IonicModule]
})
export class ServiceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
