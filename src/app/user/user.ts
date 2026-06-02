import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'users/' + this.avatar());

  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser() {}
}
