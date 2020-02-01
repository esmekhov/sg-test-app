import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { ContentTableComponent } from './content-table/content-table.component';
import { HeaderCounterComponent } from './header-counter/header-counter.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ContentModalComponent } from './content-modal/content-modal.component';
import { ContentToolbarComponent } from './content-toolbar/content-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentFormComponent,
    ContentTableComponent,
    HeaderCounterComponent,
    HeaderComponent,
    ContentComponent,
    ContentModalComponent,
    ContentToolbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
