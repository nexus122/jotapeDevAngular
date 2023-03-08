import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import * as yaml from 'js-yaml';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<string[]>('assets/articulos/nombres.json', {
      responseType: 'json',
    });
  }
  obtenerMetadatos(nombreArchivo: string) {
    return this.http
      .get(`assets/articulos/${nombreArchivo}`, { responseType: 'text' })
      .pipe(
        map((respuesta) => {
          const metadatos = respuesta.split('---')[1];
          return yaml.load(metadatos);
        })
      );
  }
}
