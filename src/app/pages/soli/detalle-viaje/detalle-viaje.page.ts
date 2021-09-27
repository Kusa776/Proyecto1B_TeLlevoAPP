import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Viajes } from '../viajes.model';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {

  Viaje: Viajes;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private Service: ServiceService){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      const id = Number(paramMap.get('id'));
      this.Viaje = this.Service.buscarViajes(id);
  });

}

}
