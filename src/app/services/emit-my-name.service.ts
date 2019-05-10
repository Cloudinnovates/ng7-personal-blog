import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitMyNameService {
  @Output()change: EventEmitter<string> = new EventEmitter();

  currentComponent: string = undefined;

  emitComponentName(componentName: string): void {
    this.change.emit(componentName);
    this.currentComponent = componentName;
  }

  getComponentName(): string {
    return this.currentComponent;
  }
}
