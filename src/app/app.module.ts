import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routing } from "./app-routing.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '@app-core/auth-guard/auth.guard';
import { AuthenticationService } from '@app-core/authentication/authentication.service';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    MainLayoutModule,
    HttpClientModule,
    Routing,
    BrowserAnimationsModule,
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent],
})

export class AppModule { }
