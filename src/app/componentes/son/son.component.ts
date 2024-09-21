import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FatherComponent } from "../father/father.component";
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-son',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './son.component.html',
  styleUrl: './son.component.css'
})
export class SonComponent {
  @Input() mensaje: string = '';
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() listUser: any[] = []
  
  inputSaludo : string = "";
  @Output() emitirFristName = new EventEmitter<string>();
  @Output() emitirLastName = new EventEmitter<string>();
  @Output() emitirGender = new EventEmitter<string>();

  firstName: string = '';
  lastName: string = '';
  gender: string = '';

  @Output() outputContador = new EventEmitter<boolean>();

  masAge() {
    this.outputContador.emit(true);
  }
  menosAge() {
    this.outputContador.emit(false);
  }

  send() {
    this.emitirFristName.emit(this.firstName);
    this.emitirLastName.emit(this.lastName);
    this.emitirGender.emit(this.gender)

    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.gender);

  }

}
