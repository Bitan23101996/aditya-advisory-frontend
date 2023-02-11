import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BroadcastService } from './core/services/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'aditya-advisory-frontend';
  displayMenu: boolean = false;
  displayFixedMenuBtn: boolean = true;

  constructor(
    private broadcastService: BroadcastService,
    private ngxLoader: NgxUiLoaderService
  ) {
    this.broadcastService.menuVisibility.subscribe((res) => {
      this.displayMenu = res;
    });

    this.broadcastService.fixedMenuBtnVisibility.subscribe((res) => {
      this.displayFixedMenuBtn = res;
    });
  }

  ngOnInit(): void {
    this.ngxLoader.start();
    setTimeout(() => {
      this.ngxLoader.stop();
    }, 5000);
  }

  public toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
    this.broadcastService.menuVisibility.next(this.displayMenu);
  }
}
