import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {

  detalle = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params=> {
      this.detalle = JSON.parse(params.detalle);
    });
   }

  ngOnInit() {
    console.log(this.detalle);
  }

}
