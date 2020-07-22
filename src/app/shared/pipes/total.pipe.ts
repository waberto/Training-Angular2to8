import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value);
    // console.log(args);
    if (value) {
      if (args[1]) {
        return value * args[0] * (1 + args[1] / 100);
      }
      return value.nbJours * value.tjmHt;
    }
    return null;
  }
}

// public totalHT(item: Order): number {
//   console.log('TOTAL HT CALLED');
//   return item.nbJours * item.tjmHt;
// }
// public totalTTC(item: Order): number {
//   console.log('TOTAL TTC CALLED');
//   return this.totalHT(item) * (1 + item.tva / 100);
// }
