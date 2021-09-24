import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModelService } from './shared/model.service';
import { InstanceComponent } from './instance/instance.component';
import { TaggroupComponent } from './taggroup/taggroup.component';


@NgModule({
  declarations: [
    AppComponent,
    InstanceComponent,
    TaggroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
