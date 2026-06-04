import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type UserType } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) selected!: boolean;
  @Output() selectUser = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'users/' + this.avatar());

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
