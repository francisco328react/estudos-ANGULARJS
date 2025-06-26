import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  name: string = "Francisco";
  idade: number = 26;
  msg: string = '';

  showAlert() {
    alert(`Olá, ${this.name}`)
  }
}
