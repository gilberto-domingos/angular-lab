import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property',
  templateUrl: './binding-property.component.html',
  styleUrls: ['./binding-property.component.scss']
})
export class BindingPropertyComponent {
  valorInicial:number = 15;
   valorAtual: string = '';

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMudouValor(evento: { novoValor: number; }){
    console.log(evento.novoValor);
  }

}
