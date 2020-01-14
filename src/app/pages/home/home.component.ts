import { Component, OnInit } from '@angular/core';
import { MatDrawerService } from '../../services/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  matDrawerOpened: boolean;

  constructor(public matDrawerService: MatDrawerService) {}

  ngOnInit() {
    this.matDrawerOpened = this.matDrawerService.opened;
  }
}
