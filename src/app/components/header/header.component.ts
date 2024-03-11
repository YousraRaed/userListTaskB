import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { I18NextModule, I18NEXT_SERVICE } from 'angular-i18next';
import { ITranslationService } from 'angular-i18next';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [I18NextModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  supportedLanguagesCount = environment.supportedLanguages.length;
  supportedLanguages = environment.supportedLanguages;

  constructor(
    private router: Router,
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService
  ) {}

  changeLanguage(lang: string) {
    if (lang !== this.i18NextService.language) {
      this.i18NextService.changeLanguage(lang);
    }
  }
}
