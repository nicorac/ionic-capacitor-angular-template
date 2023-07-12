import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutPage } from './pages/about/about.page';
import { MainPage } from './pages/main/main.page';
import { SettingsPage } from './pages/settings/settings.page';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AboutPage,
    AppComponent,
    HeaderComponent,
    MainPage,
    SettingsPage,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [ SettingsService ], multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

/**
 * Load settings before app start
 */
function loadConfig(settings: SettingsService) {
  return () => {
    return settings.initialize();
  }
}
