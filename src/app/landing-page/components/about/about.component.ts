import { Component, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() aboutScroll: boolean = false
  constructor(private elementRef: ElementRef, private service: ScrollService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.aboutScroll === true){
      console.log(this.aboutScroll);
      
      this.scrollToAbout()
      return this.service.setAbout(false)
    }
    return this.aboutScroll = this.service.getAbout()
  }

  
  scrollToAbout() {
    const element = this.elementRef.nativeElement.querySelector('#about');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
