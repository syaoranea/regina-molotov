import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  isFixed = false;
  isScrolled = false;
  isFontColorChanged = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 0;
    this.isFixed = scrollPosition > 100;
    this.isFontColorChanged = scrollPosition > 50;
  }
  
  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  scrollToSection(sectionId: string) {
  const element = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

}
