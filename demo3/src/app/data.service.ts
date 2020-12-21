import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// Create array
hobbies = [
  'dancing',
  'singing',
  'internet'
  ];
  constructor() { }
  public servicemethod(){
    return 'Its just a simple service method';
    }
}
