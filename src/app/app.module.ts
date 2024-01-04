import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app
import localeEsDO from '@angular/common/locales/es-DO'
import localeFrCA from '@angular/common/locales/fr-CA'


import { registerLocaleData } from '@angular/common'

registerLocaleData( localeEsDO )
registerLocaleData( localeFrCA )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-DO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
