import { Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  
  @ViewChild('overlay') overlay!: ElementRef;
  
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const overlayElement = this.renderer.createElement('div');
      this.renderer.addClass(overlayElement, 'overlay');
      this.renderer.appendChild(document.body, overlayElement);
      
      setTimeout(() => {
        this.overlay = new ElementRef(overlayElement);
        this.renderer.listen(overlayElement, 'click', () => {
          this.toggleMenu();
        });
      });
    }
  }

  toggleMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMenuOpen = !this.isMenuOpen;
      
      const body = document.body;
      
      if (this.isMenuOpen) {
        this.renderer.addClass(body, 'no-scroll');
        this.renderer.addClass(this.overlay.nativeElement, 'active');
      } else {
        this.renderer.removeClass(body, 'no-scroll');
        this.renderer.removeClass(this.overlay.nativeElement, 'active');
      }
    }
  }
}