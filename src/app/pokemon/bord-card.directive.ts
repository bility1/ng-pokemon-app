import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[pkmonBordCard]'
})
export class BordCardDirective {
  private initialColor: string ='#f5f5f5';
  private defaultColor: string ='#009688';
  private defaultHeight: number= 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
   }
   @Input('pkmnBorderCard') borderColor: string;
   //@Input() pkmnBorderCard: string;
   @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor|| this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
   }

private setHeight(height: number){
  this.el.nativeElement.style.height =`${height}px`;
 }

 private setBorder(color: string){
  let border = 'solid 4px' + color;
  this.el.nativeElement.style.border =border;
 }

}
