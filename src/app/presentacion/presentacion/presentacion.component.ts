import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  styleUrls: ['./presentacion.component.css'],
  templateUrl: './presentacion.component.html',
})
export class PresentacionComponent {
  name = 'Justin Octavio';
  lastName = 'Colon Solano';

  bio =
    'Hola soy desarrollador frontend y estudiante de Ingenieria en sistema en UTESA';
}
