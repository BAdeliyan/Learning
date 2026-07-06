import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotReloadInfoComponent } from './hot-reload-info/hot-reload-info.component';
import { LiveReloadInfoComponent } from './live-reload-info/live-reload-info.component';
import { LiveServerInfoComponent } from './live-server-info/live-server-info.component';

@Component({
  selector: 'app-root',
  imports: [
    HotReloadInfoComponent,
    LiveReloadInfoComponent,
    LiveServerInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bahram';
}
