import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  protected exampleCount = signal(1);
  protected computedExample = computed(() => `${this.exampleCount()} computed!`);
  //protected exampleSignal = signal({ name: 'Chriss' });

  executer() {
    this.exampleCount.update((current) => current + 1);
    //  this.exampleCount.set(10);
    // this.exampleSignal.update((current) => {
    //   return { name: current.name, age: 30 };
    // });
  }
}
