import { AfterContentInit, AfterViewInit, Component, OnInit,  Renderer2 } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  


  
  images = [
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg',
      alt: 'Slide 1'
    },
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg',
      alt: 'Slide 2'
    },
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg',
      alt: 'Slide 3'
    },
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg',
      alt: 'Slide 3'
    },
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg',
      alt: 'Slide 2'
    },
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg',
      alt: 'Slide 3'
    },
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg',
      alt: 'Slide 3'
    }
  ];
  maxItems: any;
  currentItem: number = 0;
  items!: NodeListOf<Element>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.items = document.querySelectorAll('.item');
    this.items.forEach(item => console.log(item));
    
    this.maxItems = this.items.length;
  }
  
 ngOnInit() {
   
  }


  selectImage(direcion: string): void {
    if (direcion === 'direita') {
      this.currentItem -= 1;
      
    } else {
      this.currentItem += 1;
    }

    if (this.currentItem >= this.maxItems -1) {
      this.currentItem = 1
      console.log('entrou');
      
    }

    if (this.currentItem < 1) {
      this.currentItem = this.maxItems -1;
    }
    console.log(this.maxItems);
    console.log(this.currentItem);
     /* this.itens = this.items.toArray().filter(item => item.nativeElement.classList.contains('item'));
    console.log(itens); */
    

   this.items.forEach((item) => item.classList.remove("current-item"));

    this.items[this.currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    this.items[this.currentItem].classList.add("current-item");


  }

  onPrevClick(): void {
    console.log('esquerda');
    this.selectImage('esquerda');
    
    
  }


  onNextClick(): void {
    console.log('direita');
    this.selectImage('direita');
    
  }


}