import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalesComponent } from "./sales/components/sales/sales.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FrontendFactory';
}
