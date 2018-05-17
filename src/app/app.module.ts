import {RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { HttpService } from './http.service';
import { MycurrencyPipe } from './pipes/mycurrency.pipe';
import { MillisecondPipe } from './millisecond.pipe';
import { TrackModule } from './track/track.module';
import { CarbonbarComponent } from './carbonbar/carbonbar.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    MycurrencyPipe,
    MillisecondPipe,
    CarbonbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TrackModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
