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
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private plantaService: PlantaService) { }
  
  getPlantasList(): void {
    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.calcularTotales();
  });
}

  calcularTotales() {
    this.totalInterior = this.plantas.filter(planta => planta.tipo === 'Interior').length;
    this.totalExterior = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
}
  ngOnInit() {
    this.getPlantasList();
  }

}
