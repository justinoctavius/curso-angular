import { Component, Input } from '@angular/core';
import { Person } from '../types/person.type';

@Component({
  selector: 'app-persons-deleted-nav',
  templateUrl: './persons-deleted-nav.component.html',
  styleUrls: ['./persons-deleted-nav.component.css'],
})
export class PersonsDeletedNavComponent {
  @Input() persons: Person[] = [];
}
