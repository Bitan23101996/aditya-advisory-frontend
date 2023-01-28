import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { ApiService } from '../../services/api.service';
import { BroadcastService } from '../../services/broadcast.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  displayMenu:boolean = false;
  menuList:Menu[] = [];
  constructor(private broadcastService: BroadcastService, private apiService: ApiService) { 
    this.broadcastService.menuVisibility.subscribe((res)=>{
      this.displayMenu = res;
    })
  }

  ngOnInit(): void {
    this.getMenuList();
  }

  public getMenuList(){
   this.menuList = this.apiService.getMenuList();
  }

  public toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
    this.broadcastService.menuVisibility.next(this.displayMenu);
  }

  public navigateToSection(){
    this.displayMenu = !this.displayMenu;
    this.broadcastService.menuVisibility.next(this.displayMenu);
  }
}
