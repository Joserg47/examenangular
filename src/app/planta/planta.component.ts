import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { dataPlantas } from './dataPlantas';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  plantas: Array<Planta> = [];
  constructor() { }
  getPlantaList(): Array<Planta> {
    return dataPlantas;
  }

  ngOnInit() {
    this.plantas = this.getPlantaList();
  }

}
