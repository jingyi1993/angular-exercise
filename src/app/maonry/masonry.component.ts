import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  Input,
  Output,
  ElementRef,
  EventEmitter,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var require: any;
// let imagesLoaded: any;
let masonryConstructor: any;

import { MasonryOptions } from './masonry-options';

@Component({
  selector: 'app-masonry-layout',
  template: '<ng-content></ng-content>',
  styles: [
    `
          :host {
              display: block;
          }
      `
  ]
})
export class MasonryComponent implements OnInit, OnChanges, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: any, private _element: ElementRef) {}

  public _msnry: any;

  // Inputs
  @Input() public options: MasonryOptions;
  @Input() public useImagesLoaded: Boolean = false;
  @Input() updateLayout: Boolean = false;

  // Outputs
  @Output() layoutComplete: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() removeComplete: EventEmitter<any[]> = new EventEmitter<any[]>();

  ngOnInit() {

    if (isPlatformBrowser(this.platformId) && masonryConstructor === undefined) {
      masonryConstructor = require('app-masonry-layout');
    }

    // Create masonry options object
    if (!this.options) {
      this.options = {};
    }

    // Set default itemSelector
    if (!this.options.itemSelector) {
      this.options.itemSelector = '[masonry-item], masonry-item';
    }

    if (isPlatformBrowser(this.platformId)) {
      // Initialize Masonry
      this._msnry = new masonryConstructor(this._element.nativeElement, this.options);

      // Bind to events
      this._msnry.on('layoutComplete', (items: any) => {
        this.layoutComplete.emit(items);
      });
      this._msnry.on('removeComplete', (items: any) => {
        this.removeComplete.emit(items);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // only update layout if it's not the first change
    if (changes.updateLayout) {
      if (!changes.updateLayout.firstChange) {
        this.layout();
      }
    }
  }

  ngOnDestroy() {
    if (this._msnry) {
      this._msnry.destroy();
    }
  }

  public layout() {
    setTimeout(() => {
      this._msnry.layout();
    });
  }

  public reloadItems() {
    setTimeout(() => {
      this._msnry.reloadItems();
    });
  }

  // public add(element: HTMLElement, prepend: boolean = false) {
  public add(element: HTMLElement) {
    let isFirstItem = false;

    // Check if first item
    if (this._msnry.items.length === 0) {
      isFirstItem = true;
    }
  }

  public remove(element: HTMLElement) {
    // Tell Masonry that a child element has been removed
    this._msnry.remove(element);

    // Layout items
    this.layout();
  }
}