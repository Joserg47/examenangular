import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { dataPlantas } from './dataPlantas';
import { PlantaService } from './planta.service';


@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) { }
  
  getPlantasList(): void {
    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
  });
}
  ngOnInit() {
    this.getPlantasList();
  }

}
