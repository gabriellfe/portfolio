import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { IonicModule } from '@ionic/angular';
import { NgScrollbarModule } from 'ngx-scrollbar';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, HeaderComponent, FooterComponent, IonicModule, NgScrollbarModule]
})
export class AppComponent {
  title = 'angulardemo';
}
