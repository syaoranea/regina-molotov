import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  
  private about: boolean = false
  constructor() { }

  setAbout(value: boolean) {
      this.about = value;
  }

  getAbout(){
    return this.about;
  }
}
