import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBookRoutingModule } from './create-book-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBookComponent } from './create-book.component';


@NgModule({
  declarations: [CreateBookComponent],
  imports: [
    CommonModule,
    CreateBookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateBookModule { }
