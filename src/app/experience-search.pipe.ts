import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experienceSearch'
})
export class ExperienceSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
