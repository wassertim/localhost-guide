import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuideListComponent } from "./guide/guide-list/guide-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GuideListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'localhost-guide';
}
