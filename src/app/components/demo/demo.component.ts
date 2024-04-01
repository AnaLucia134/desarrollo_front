import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'Este valor esta siendo manejado desde el archivo que maneja la logica';

  items = ['Perez', 'Lopez', 'Estrada', 'Gonzalez', 'Sanchez'];

  ngOnInit(): void {
  }

  agregarElemento() {
    this.items.push('nuevo item');
  }

  eliminarElemento(i: number) {
    this.items.splice(i, 1);
  }

}
