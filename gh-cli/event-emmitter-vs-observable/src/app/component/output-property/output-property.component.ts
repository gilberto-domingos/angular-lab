import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PropertyService } from 'src/app/service/property.service';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @Input() novoValor: number = 0;
  @Output() novoValorChange = new EventEmitter<number>();

  @ViewChild('campoInput', { static: true }) campoValorInput!: ElementRef;

  valorInicial: number = 0;


  constructor(private propertyService: PropertyService) { }

  incrementa() {
    this.valor++;
    this.campoValorInput.nativeElement.value = this.valor;
    this.mudouValor.emit({ novoValor: this.valor });
    this.novoValorChange.emit(this.novoValor);
    console.log("novo valor : ", this.valor);
  }

  decrementa() {
    this.valor--;
    this.campoValorInput.nativeElement.value = this.valor;
    this.mudouValor.emit({ novoValor: this.valor });
    this.novoValorChange.emit(this.novoValor);
    console.log("novo valor : ", this.valor);
  }

  ngOnInit() {
    this.novoValor = this.propertyService.getNovoValor();
    this.propertyService.novoValor$.subscribe(valor => {
      this.novoValor = valor;
    });
  }
}