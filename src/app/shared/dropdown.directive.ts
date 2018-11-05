import {Directive , HostListener , HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isopen =false;
  @HostListener('click') toggleopen() {
      this.isopen = !this.isopen;
  }

}
