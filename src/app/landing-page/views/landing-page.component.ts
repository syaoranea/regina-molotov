import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isFixed = false;
  isScrolled = false;
  isFontColorChanged = false;
  @Output() scroll = new EventEmitter<boolean>();
  skrolla: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 0;
    this.isFixed = scrollPosition > 100;
    this.isFontColorChanged = scrollPosition > 50;
  }
  
  constructor(
    private elementRef: ElementRef, private serviceAbout: ScrollService
  ) { }

 ngOnInit(): void {

 }

  scrollToSection(sectionId: string) {
  const element = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

   scrollAbout(): void {
    this.skrolla = true
  }
}