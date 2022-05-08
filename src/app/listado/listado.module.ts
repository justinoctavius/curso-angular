import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListadoComponent } from './listado/listado.component';
import { PersonsDeletedNavComponent } from './persons-deleted-nav/persons-deleted-nav.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [ListadoComponent, PersonComponent, PersonsDeletedNavComponent],
  imports: [CommonModule],
  exports: [ListadoComponent],
})
export class ListadoModule {}
