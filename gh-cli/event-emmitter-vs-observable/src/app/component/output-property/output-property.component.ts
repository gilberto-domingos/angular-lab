import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PropertyService } from 'src/app/service/property.service';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  //@Output() mudouValor = new EventEmitter();

  @Output() mudouValor = new EventEmitter<{ novoValor: number }>();

  @Input() novoValor: number = 0;
  @Output() novoValorChange = new EventEmitter<number>();

  @ViewChild('campoInput', { static: true }) campoValorInput!: ElementRef;

  valorInicial: number = 0;


  constructor(private propertyService: PropertyService) { }
/*
  incrementa() {
    this.valor++;
    this.campoValorInput.nativeElement.value = this.valor;
    this.mudouValor.emit({ novoValor: this.valor });
    this.novoValorChange.emit(this.novoValor);
    console.log("novo valor : ", this.valor);
  } */

  incrementa(): void {
    this.valorInicial++;
    this.campoValorInput.nativeElement.value = this.valorInicial;
    this.mudouValor.emit({ novoValor: this.valorInicial });
    this.propertyService.setNovoValor(this.valorInicial);
    console.log("novo valor : ", this.valorInicial);
  }

  decrementa(): void {
    this.valorInicial--;
    this.campoValorInput.nativeElement.value = this.valorInicial;
    this.mudouValor.emit({ novoValor: this.valorInicial });
    this.propertyService.setNovoValor(this.valorInicial);
    console.log("novo valor : ", this.valorInicial);
  }

 
  ngOnInit(): void {
    this.valorInicial = this.propertyService.getNovoValor();
  }


}