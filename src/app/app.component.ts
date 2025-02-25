import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FatherComponent } from "./componentes/father/father.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frist_Osnived';
}
