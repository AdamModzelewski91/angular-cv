import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {
  @Input() tooltip = '';

  delay? = 190; 

  myPopup!: HTMLElement;

  timer!: number;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {    
    this.timer = setTimeout(() => {
      let x = this.el.nativeElement.getBoundingClientRect().left + this.el.nativeElement.offsetWidth / 2; // Get the middle of the element
      let y = this.el.nativeElement.getBoundingClientRect().top + this.el.nativeElement.offsetHeight + 6; // Get the bottom of the element, plus a little extra
      this.createTooltipPopup(x, y);
    }, this.delay)
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.timer) clearTimeout(this.timer);
    if (this.myPopup) this.myPopup.remove();
  }
  
  private createTooltipPopup(x: number, y: number) {
    let popup = document.createElement('div');
    popup.innerHTML = this.tooltip;
    popup.setAttribute("class", "tooltip-container");
    popup.style.top = y.toString() + "px";
    popup.style.left = x.toString() + "px";
    document.body.appendChild(popup);
    this.myPopup = popup;
    setTimeout(() => {
      if (this.myPopup) this.myPopup.remove();
    }, 5000); 
  }
  
  ngOnDestroy(): void {
    if (this.myPopup) this.myPopup.remove();
  }
}
