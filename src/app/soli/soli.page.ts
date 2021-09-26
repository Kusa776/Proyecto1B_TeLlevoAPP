import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soli',
  templateUrl: './soli.page.html',
  styleUrls: ['./soli.page.scss'],
})
export class SoliPage{

  lista: Array<any> = [
    {
      titulo: "Fernando"
    },
    {
      titulo: "Agusto"
    },
    {
      titulo: "kusa"
    },
    {
      titulo: "palta"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
