import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-generic-error',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './generic-error.component.html',
  styleUrl: './generic-error.component.scss'
})
export class GenericErrorComponent {
  @Input() customErrorTemplate?: TemplateRef<any>;
  @Input() errorMessage: string = 'algo deu errado';
  @Input() buttonLabel: string = 'recarregar';
  @Output() handleError = new EventEmitter();
}
