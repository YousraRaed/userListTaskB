import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { I18N_PROVIDERS } from './shared/internationalization/i18next-configuration';
import { NotificationService } from './shared/services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NotificationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [...I18N_PROVIDERS],
})
export class AppComponent implements OnInit {
  title = 'users';
  popUpMessage: string = '';

  constructor(
    private notificationService: NotificationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.notificationService.popUpMessage$.subscribe((message) => {
      this.popUpMessage = message;
      this.cdr.detectChanges();
    });
  }
}
