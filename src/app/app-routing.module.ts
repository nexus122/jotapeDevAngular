import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ListaDeArticulosComponent } from './lista-de-articulos/lista-de-articulos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaDeArticulosComponent,
  },
  {
    path: 'articulos/:id',
    component: BlogComponent,
    data: { markdownPath: 'assets/articulos' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
