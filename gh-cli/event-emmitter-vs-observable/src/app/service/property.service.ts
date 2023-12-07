// property.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private novoValorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  novoValor$ = this.novoValorSubject.asObservable();

  getNovoValor(): number {
    return this.novoValorSubject.getValue();
  }

  setNovoValor(valor: number): void {
    this.novoValorSubject.next(valor);
  }
}
