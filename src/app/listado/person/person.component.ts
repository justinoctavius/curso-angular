import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Occupations } from '../constants/occupations.constant';
import { Person } from '../types/person.type';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() name = '';
  @Input() occupation = '';
  @Input() bio = '';
  @Input() imgUrl = '';
  @Input() id = '';
  @Output() onDeleteClick = new EventEmitter<Person>();

  handleOnDeleteClick() {
    const person: Person = {
      name: this.name,
      occupation: this.occupation,
      bio: this.bio,
      id: this.id,
      imgUrl: this.imgUrl,
    };
    this.onDeleteClick.emit(person);
  }

  getOccupationIcon() {
    switch (this.occupation) {
      case Occupations.BACKEND:
        return '👩‍💻';
      case Occupations.FRONTEND:
        return '👨‍💻';
      case Occupations.DEVOPS:
        return '👨‍💻';
      case Occupations.TEACHER:
        return '👨‍🏫';
      default:
        return '👋';
    }
  }
}
