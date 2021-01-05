import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{

  mostrar: boolean = true;
  frase: any = {
    mensaje: 'hay muchas cosas que quiero en la vida pero solo una mas que las demas...',
    autor: 'anonimo'
  };

  personajes: string[] = ['spiderman', 'venom', 'dr octopus'];


}