import { Component } from '@angular/core';

@Component({
  template: `
  <h1>h1 text</h1>
  <button [tooltip]="'Test Tooltip'" data-testid="button">Button tooltip</button>
  <h2 [tooltip]="'h2 Tooltip text'">h2 text</h2>
  `
})
export class TestComponent { }