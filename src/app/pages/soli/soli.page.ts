import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-soli',
  templateUrl: './soli.page.html',
  styleUrls: ['./soli.page.scss'],
})
export class SoliPage implements OnInit{
  Viajes=[];
  constructor(public navControl : NavController, private viajesservice: ServiceService, private router: Router) { }


  ngOnInit() {
    this.Viajes = this.viajesservice.mostrarViajes()
  }
  ionViewWillEnter(){
    this.Viajes = this.viajesservice.mostrarViajes()
  }
  
}
