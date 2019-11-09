import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 mostrarMensajeEnVariable = false;

variable = '';

guardemosUnValorEnUnaVariable(valor) {
  this.variable = valor;
}
ngOnInit() {
  this.queMensajeMostrar();
}

queMensajeMostrar() {
  if (this.mostrarMensajeEnVariable == true) {
    this.guardemosUnValorEnUnaVariable(
      "El valor de la condición es igual a true 👍"
    );
  } else {
    this.guardemosUnValorEnUnaVariable(
      "El valor de la condición es diferente a true!, 👎"
    );
  }
}
}
