import { Component, Output } from '@angular/core';
import { SonComponent } from "../son/son.component";

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [SonComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  mensajeControlador: string = "Hola soy el padre";
  name : string = "Daniel"
  age : number = 18
  
  firstName: string = '';
  lastName: string = '';
  gender: string = '';

  recibirFirstName(event: string) {
    this.firstName = event 
  }

  recibirLastName(event: string) {
    this.lastName = event 
  }

  recibirGender(event: string) {
    this.gender = event 
  }

  recibirContador(result: boolean) {
    if (result) {
      this.age++;
    }else {
      this.age--;
    }
  }

  listUser = [
    {
      firstName: 'Daniel',
      lastName: 'Garcia',
      age: 18
    },
    {
      firstName: 'Osnived',
      lastName: 'Padilla',
      age: 21
    },
    {
      firstName: 'Jeremy',
      lastName: 'Gomez',
      age: 25
    },
    {
      firstName: 'Fabio',
      lastName: 'Fruto',
      age: 22
    },

  ]
}
