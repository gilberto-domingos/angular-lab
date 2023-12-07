import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', { static: true }) campoValorInput!: ElementRef;

  constructor() {}

  incrementa() {
    this.valor++;
    this.campoValorInput.nativeElement.value = this.valor;
    this.mudouValor.emit({ novoValor: this.valor });
    console.log("novo valor : ", this.valor);
  }
  
  decrementa() {
    this.valor--;
    this.campoValorInput.nativeElement.value = this.valor;
    this.mudouValor.emit({ novoValor: this.valor });
    console.log("novo valor : ", this.valor);
  }
  
}
