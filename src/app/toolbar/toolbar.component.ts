import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
  }

  // Should set Home page's title.
  setHomeTitle(): void {
    this.titleService.setTitle('Blog Frame - Home');
  }

  // Should set Welcome page's title.
  setWelcomeTitle(): void {
    this.titleService.setTitle('Blog Frame - Welcome');
  }

}
