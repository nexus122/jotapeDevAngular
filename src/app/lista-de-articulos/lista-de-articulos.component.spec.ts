import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeArticulosComponent } from './lista-de-articulos.component';

describe('ListaDeArticulosComponent', () => {
  let component: ListaDeArticulosComponent;
  let fixture: ComponentFixture<ListaDeArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeArticulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
