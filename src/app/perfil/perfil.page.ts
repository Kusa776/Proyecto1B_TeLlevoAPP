import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  constructor(public fb: FormBuilder,
    public alertControler: AlertController,
    public navCtrol: NavController) {
     
    
  }

  ngOnInit() {
    
    

  }
   
  

  

}
