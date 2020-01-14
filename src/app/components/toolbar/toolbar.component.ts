import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MatDrawerService } from '../../services/';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
})
export class ToolbarComponent implements OnInit {
  pageTitle: string;

  constructor(private titleService: Title, private matDrawerService: MatDrawerService) {}

  ngOnInit() {}

  // Should set Home page's title.
  setHomeTitle(): void {
    this.pageTitle = 'Blog Frame - Home';
    this.titleService.setTitle(this.pageTitle);
  }

  // Should set Welcome page's title.
  setWelcomeTitle(): void {
    this.pageTitle = 'Blog Frame - Welcome';
    this.titleService.setTitle(this.pageTitle);
  }

  // Should toggle mat-sidenav.
  toggle(): void {
    this.matDrawerService.toggle().subscribe((opened) => opened);
  }
}
