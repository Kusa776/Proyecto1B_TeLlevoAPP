import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-soli',
  templateUrl: './soli.page.html',
  styleUrls: ['./soli.page.scss'],
})
export class SoliPage implements OnInit{

  titulo = "lista";

  lista: any = [
    {
      id : 1,
      apodo: "Fernando",
      vehiculo: "Auto volador",
      horario: "13:30/14:30",
      dia: "viernes",
      descripcion: "Es un auto que vuela y rojo",
      imagen: "../assets/6.png.jpg"
    },
    {
      id : 2,
      apodo: "Miku",
      vehiculo: "Auto Otaku",
      horario: "11:30/13:30",
      dia: "miercoles",
      descripcion: "Es un auto lleno de monas xinas",
      imagen: "../assets/5.png.jpg",
      imagen2: '../assets/7.png.jpg'

    },
    {
      id : 3,
      apodo: "La roca",
      vehiculo: "Es una roca",
      horario: "7:30/8:30",
      dia: "sabado",
      descripcion: "Literal es una roca que mejor",
      imagen: "../assets/9.png.webp"
    },
    {
      id : 4,
      apodo: "GATO CON BOTAS",
      vehiculo: "Gato con botas",
      horario: "15:30/16:30",
      dia: "lunes",
      descripcion: "Es el gato con botas de las peliculas sin auto asi que caminas",
      imagen: "../assets/8.png.jpg"
    }
  ]

  constructor(public navControl: NavController) { }

  detalleViaje(detalle: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        detalle: JSON.stringify(detalle)
      }

    };
    this.navControl.navigateForward(['detalle-viaje'], navigationExtras);  
  };

  ngOnInit() {
  }

}
