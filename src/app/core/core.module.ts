import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent, FooterComponent } from '.';

@NgModule({
    imports: [
      CommonModule,
      CommonModule,
      RouterModule
    ],
    exports: [HeaderComponent, FooterComponent],
    declarations: [HeaderComponent, FooterComponent],
    providers: []
  })
  export class CoreModule { }
  