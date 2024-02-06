import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cardContent]',
  standalone: true
})
export class CardContentDirective {

  @Input({ required: true })
  @HostBinding('style.color') fontColor?: string;

  ngOnChanges(): void {
    this.setFontColor(this.fontColor)
  }

  setFontColor(value?: string) {
    if (value) {
      const numericValue = +value;

      const colorMap = {
        '#DD4B4B': numericValue <= 1,
        '#3C7649': numericValue > 5,
        '#3684CB': !(numericValue <= 1 || numericValue > 5)
      };

      const color = (Object.keys(colorMap) as Array<'#DD4B4B' | '#3C7649' | '#3C7649'>).find((key) => colorMap[key]);

      this.fontColor = color;
    }
  }

}
