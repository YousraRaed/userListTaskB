import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersListComponent } from '../../components/users/users-list/users-list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [UsersListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
