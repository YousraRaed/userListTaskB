import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, I18NextModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnChanges {
  @Input() message: string = '';
  show: boolean = false;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.message) {
      this.show = true;
    }
  }
  /**
   * close notification pop up
   */
  close() {
    this.show = false;
  }
}
