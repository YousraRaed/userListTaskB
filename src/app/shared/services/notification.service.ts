import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _popUpMessage = new BehaviorSubject<string>('');
  public popUpMessage$ = this._popUpMessage.asObservable();

  constructor() {}

  showPopUp(message: string) {
    console.log(message);

    this._popUpMessage.next(message);
    setTimeout(() => this._popUpMessage.next(''), 5000);
  }
}
