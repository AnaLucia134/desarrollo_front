import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products = [
    {
      id: '1',
      image: 'assets/images/img1.jpg',
      title: 'Blanco Nieve para la Novia Moderna: ',
      price: 175,
      description: 'Tacones blancos elegantes para la novia contemporánea.'
    },
    {
      id: '2',
      image: 'assets/images/img2.jpg',
      title: 'Negro Ébano Plataforma Elegante',
      price: 100,
      description: 'Clásicos tacones negros con plataforma para una elegancia sin esfuerzo.'
    },
    {
      id: '3',
      image: 'assets/images/img3.jpg',
      title: 'Fucsia Vibrante de Altura Imponente: ',
      price: 150,
      description: 'Tacones fucsias audaces con plataforma para un estilo llamativo.'
    },
    {
      id: '4',
      image: 'assets/images/img4.jpg',
      title: 'Plateado Estelar de Noche Brillante: ',
      price: 90,
      description: ' Tacones plateados para brillar en la pista de baile sin sacrificar comodidad.'
    },
    {
      id: '5',
      image: 'assets/images/img5.jpg',
      title: 'Negro Nocturno con Detalle Brillante: ',
      price: 50,
      description: 'Tacones negros con un toque de brillo para destacar en la noche.'
    },
    {
      id: '6',
      image: 'assets/images/img6.jpg',
      title: 'Fucsia Floral Bohemio con Plataforma: ',
      price: 125,
      description: ' Tacones fucsias con estampado floral para un toque bohemio.'
    }
  ];


  ngOnInit(): void {
  }

  clickProduct(id: number) {
    console.log('Id producto recibido desde el componente product', id);
  }

}