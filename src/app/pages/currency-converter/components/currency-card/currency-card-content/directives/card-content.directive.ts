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
        'red': numericValue <= 1,
        'green': numericValue > 5,
        'blue': !(numericValue <= 1 || numericValue > 5)
      };

      const color = (Object.keys(colorMap) as Array<'red' | 'green' | 'blue'>).find((key) => colorMap[key]);

      this.fontColor = color;
    }
  }

}
