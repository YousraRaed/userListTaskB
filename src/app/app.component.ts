import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { I18N_PROVIDERS } from './shared/internationalization/i18next-configuration';
import { NotificationService } from './shared/services/notification.service';
import { CommonModule } from '@angular/common';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';
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
  isArabic: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private cdr: ChangeDetectorRef,
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService
  ) {}

  ngOnInit() {
    this.notificationService.popUpMessage$.subscribe((message) => {
      this.popUpMessage = message;
      this.cdr.detectChanges();
    });
    this.i18NextService.events.languageChanged.subscribe((lng) => {
      this.isArabic = lng === 'ar';
    });
  }
}
