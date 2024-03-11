import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { I18N_PROVIDERS } from './shared/internationalization/i18next-configuration';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [...I18N_PROVIDERS],
})
export class AppComponent {
  title = 'users';
}
