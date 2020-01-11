import { Component, OnInit } from '@angular/core';

import { MatDrawerService } from '../services/'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(public matDrawerService: MatDrawerService) {
  }

  matDrawerOpened: boolean = this.matDrawerService.opened;
  
  ngOnInit() {
  }
  
}
