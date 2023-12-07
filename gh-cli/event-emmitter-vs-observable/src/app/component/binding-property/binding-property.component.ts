import { PropertyService } from './../../service/property.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { OutputPropertyComponent } from '../output-property/output-property.component';

@Component({
  selector: 'app-binding-property',
  templateUrl: './binding-property.component.html',
  styleUrls: ['./binding-property.component.scss']
})
export class BindingPropertyComponent implements AfterViewInit {
  @ViewChild(OutputPropertyComponent, { static: false }) outputComponent!: OutputPropertyComponent;
  
  valorInicial: number = 0; 
  valorAtual: string = '';
  novoValor: number = 0;

  constructor(private propertyService: PropertyService) { 
    this.valorInicial = this.propertyService.getNovoValor();
  }
  
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMudouValor(evento: { novoValor: number; }){
    this.valorInicial = evento.novoValor;
    this.propertyService.setNovoValor(this.valorInicial);
    console.log(evento.novoValor);
  }  

  ngAfterViewInit() {
    if (this.outputComponent) {
      this.valorInicial = this.outputComponent.valor;
    }
  }

  ngOnInit() {
   
  }
}
