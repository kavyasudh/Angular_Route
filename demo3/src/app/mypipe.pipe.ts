import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, hobbie: string): any {
    if(hobbie === 'dancing'){
    return "good hobbie is "+value;
    }
    else
    {
    return "bad hobbie is "+value;
    }
    }
  }
