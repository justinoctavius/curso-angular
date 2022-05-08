import { Component } from '@angular/core';
import data from '../constants/persons.data';
import { Person } from '../types/person.type';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  persons: Person[] = data;
  personsDeleted: Person[] = [];

  onDeleteClick(person: Person) {
    this.persons = this.persons.filter((p) => p.id != person.id);
    this.personsDeleted.push(person);
  }

  shouldShowPersonsDeletedNav() {
    return this.personsDeleted.length > 0;
  }
}
