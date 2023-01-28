import { Component, OnInit } from '@angular/core';
import { BroadcastService } from './core/services/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'aditya-advisory-frontend';
  displayMenu: boolean = false;
  displayFixedMenuBtn:boolean = true;
  constructor(private broadcastService: BroadcastService) {
    this.broadcastService.menuVisibility.subscribe((res)=>{
      this.displayMenu = res;
    });

    this.broadcastService.fixedMenuBtnVisibility.subscribe((res)=>{
      this.displayFixedMenuBtn = res;
    })
  }

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
    this.broadcastService.menuVisibility.next(this.displayMenu);
  }
}
