// src/app/components/planta/planta.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantaComponent } from './planta.component';
import { PlantaService } from './planta.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Usa el módulo de pruebas


describe('PlantaComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;
  let plantaService: PlantaService;

  const mock_datosplantas = [
    {
      id: 1,
      nombre_comun: 'Rosa',
      nombre_cientifico: 'Rosa',
      tipo: 'Flor',
      altura_maxima: 48,
      clima: 'Templado',
      sustrato_siembra: 'Desconocido'
    },
    {
      id: 2,
      nombre_comun: 'Cactus',
      nombre_cientifico: 'Cactus',
      tipo: 'Planta',
      altura_maxima: 5144,
      clima: 'Templado',
      sustrato_siembra: 'Desconocido'
    },
    {
      id: 3,
      nombre_comun: 'Girasol',
      tipo: 'Planta',
      altura_maxima: 51,
      clima: 'Templado',
      sustrato_siembra: 'Desconocido'
    }
  ];

  beforeEach(async () => {
    const mockPlantaService = jasmine.createSpyObj('PlantaService', ['getPlantas']);
    mockPlantaService.getPlantas.and.returnValue(of(mock_datosplantas));

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlantaComponent],
      providers: [
        { provide: PlantaService, useValue: mockPlantaService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;
    plantaService = TestBed.inject(PlantaService);
    fixture.detectChanges();
  });

  it('se debe mostrar la tabla con las plantas dadas', () => {
    const tablaFilas = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tablaFilas.length).toBe(mock_datosplantas.length);

    for (let i = 0; i < mock_datosplantas.length; i++) {
      const celdas = tablaFilas[i].querySelectorAll('td');
      expect(celdas[0].textContent).toContain(mock_datosplantas[i].id);
      expect(celdas[1].textContent).toContain(mock_datosplantas[i].nombre_comun);
      expect(celdas[2].textContent).toContain(mock_datosplantas[i].tipo);
      expect(celdas[3].textContent).toContain(mock_datosplantas[i].clima);
    }
  });
});