import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  title = 'blog-frame';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Blog Frame - Welcome');
  }
}
