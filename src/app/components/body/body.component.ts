import { Component, OnInit } from '@angular/core';
import { Repositorios } from '../../models/empleado/empleado.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


export class BodyComponent implements OnInit {

repositorios: Repositorios[] =[
  {nombre: "Carlos", descripcion: "Botón de enter", enlace: 'https://docs.github.com/en/rest', estrellas: 2, lenguaje: 'React'  },
  {nombre: "Carlos", descripcion: "Botón de enter", enlace: 'https://docs.github.com/en/rest', estrellas: 2, lenguaje: 'React'  },
  {nombre: "Carlos", descripcion: "Botón de enter", enlace: 'https://docs.github.com/en/rest', estrellas: 2, lenguaje: 'React'  },
  {nombre: "Carlos", descripcion: "Botón de enter", enlace: 'https://docs.github.com/en/rest', estrellas: 2, lenguaje: 'React'  },
]


  constructor() { 
  }

  ngOnInit(): void {
  }

}
