import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantaComponent } from './planta.component';
import { By } from '@angular/platform-browser';
import { fakeAsync } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { PlantaService } from './planta.service';
import { Planta } from './planta';

describe('PlantaComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClient],
      declarations: [ PlantaComponent ]
    })
    .compileComponents();
});

    beforeEach(() => {
        fixture = TestBed.createComponent(PlantaComponent);
        component = fixture.componentInstance;
    
        component.plantas = [
          { id: 1, nombre_comun: 'Rosa', nombre_cientifico: 'Rosa Gandiflora', tipo: 'interior', altura_maxima: 50, clima: 'tropical', sustrato_siembra: 'tierra' },
          { id: 2, nombre_comun: 'Girasol', nombre_cientifico: 'Cientifico 2', tipo: 'exterior', altura_maxima: 100, clima: 'templado', sustrato_siembra: 'arena' },
          { id: 3, nombre_comun: 'Petunia', nombre_cientifico: 'Cientifico 3', tipo: 'interior', altura_maxima: 75, clima: 'tropical', sustrato_siembra: 'tierra' },
        ];
    
    component.calcularTotales(); // Asegúrate de recalcular los totales
    
    fixture.detectChanges();
});

it('debería crear la tabla con tres filas', () => {
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3); // Verifica que hay 3 filas
  });

  it('debería mostrar correctamente los datos de las plantas', () => {
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');

    expect(rows[0].cells[0].textContent).toContain('Planta 1');
    expect(rows[0].cells[1].textContent).toContain('interior');
    expect(rows[0].cells[2].textContent).toContain('tropical');

    expect(rows[1].cells[0].textContent).toContain('Planta 2');
    expect(rows[1].cells[1].textContent).toContain('exterior');
    expect(rows[1].cells[2].textContent).toContain('templado');

    expect(rows[2].cells[0].textContent).toContain('Planta 3');
    expect(rows[2].cells[1].textContent).toContain('interior');
    expect(rows[2].cells[2].textContent).toContain('tropical');
  });
});