import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
// import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule.forRoot({ 
      include: [`/^\/public\/.*/`], 
      exclude: [`/^\/public\/.*/`]
    }),
    AppRoutingModule,
    ScullyLibModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // GoogleTagManagerModule.forRoot({
    //   id: 'GTM-PMNJPV5'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
