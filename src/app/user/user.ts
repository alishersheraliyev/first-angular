import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() selectUser = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'users/' + this.avatar());

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.id);
  }
}
