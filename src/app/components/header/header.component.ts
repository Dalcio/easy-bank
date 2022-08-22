import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  toggleButton: boolean = false;
  toggledCalls: 'menu show' | 'menu hide' = 'menu hide';

  constructor() {}

  ngOnInit(): void {}

  handleToggleButtonClick(): void {
    this.toggleButton = !this.toggleButton;
    this.toggledCalls = this.toggleButton ? 'menu show' : 'menu hide';
  }
}
