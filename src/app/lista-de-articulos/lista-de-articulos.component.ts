import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../servicios/ArticulosService';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-de-articulos.component.html',
  styleUrls: ['./lista-de-articulos.component.scss'],
})
export class ListaDeArticulosComponent implements OnInit {
  articulos: { nombreArchivo: string; imagen: string; description: string }[] =
    [];
  baseUrl: string = 'assets/articulos/';
  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulosService.listar().subscribe((nombresArchivos) => {
      nombresArchivos.forEach((nombreArchivo) => {
        this.articulosService
          .obtenerMetadatos(nombreArchivo)
          .subscribe((metadatos: any) => {
            this.articulos.push({
              nombreArchivo,
              imagen: metadatos.image,
              description: metadatos.description,
            });
          });
      });
    });
  }
}