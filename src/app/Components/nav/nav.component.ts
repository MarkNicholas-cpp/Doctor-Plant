import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isScrolled = false;
  isNavOpen = false;
  isMobile = false;

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenWidth();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (this.isNavOpen && this.isMobile && !targetElement.closest('.nav-bar')) {
      this.isNavOpen = false;
    }
  }

  responsiveNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 768;
  }
}
