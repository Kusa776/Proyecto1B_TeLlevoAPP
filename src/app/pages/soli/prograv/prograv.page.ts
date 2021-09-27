import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-prograv',
  templateUrl: './prograv.page.html',
  styleUrls: ['./prograv.page.scss'],
})
export class ProgravPage implements OnInit{
  constructor(private router: Router, private servicio: ServiceService) { }
  agregarViaje(nombre,precio,imagen,capacidadTotal,descripcion){
    this.servicio.agregarViajes(nombre.value,precio.value,imagen.value,capacidadTotal.value,descripcion.value);
    this.router.navigate(['/soli'])
  }
  ngOnInit() {
  }
}
