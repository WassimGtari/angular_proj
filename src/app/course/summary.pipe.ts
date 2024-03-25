import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) return null;

    const defaultlimit = limit ? limit : 50;
    return (
      value.substring(0, 1).toUpperCase() +
      value.substring(1, defaultlimit) +
      '@gmail.com'
    );
  }
}
