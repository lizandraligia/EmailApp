import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle',
  pure: false
})
export class FilterPipePipe implements PipeTransform {

  //Metódo usado para filtrar a busca de emails por título
  transform(items: any[], filter: any): any {

    if (!items || !filter.title) {
        return items;
    }
    return items.filter(item => item.title.toLowerCase().indexOf(filter.title.toLowerCase()) !== -1);
  }

}
