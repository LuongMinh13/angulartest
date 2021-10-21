import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isDisplayEntree: boolean = true;
  isDisplaySoup: boolean = false;
  isDisplayNouille: boolean = false;
  isDisplayRice: boolean = false;
  isDisplayDessert: boolean = false;

  showMenuEntree() {
    while (this.isDisplayEntree === false) {
      this.isDisplayEntree = true;
      this.isDisplayNouille = false;
      this.isDisplaySoup = false;
      this.isDisplayRice = false;
      this.isDisplayDessert = false;
    }
  }

  showMenuSoup() {
    while (this.isDisplaySoup === false) {
      this.isDisplayEntree = false;
      this.isDisplayNouille = false;
      this.isDisplaySoup = true;
      this.isDisplayRice = false;
      this.isDisplayDessert = false;
    }
  }

  showMenuNouille() {
    while (this.isDisplayNouille === false) {
      this.isDisplayEntree = false;
      this.isDisplayNouille = true;
      this.isDisplaySoup = false;
      this.isDisplayRice = false;
      this.isDisplayDessert = false;
    }
  }

  showMenuRice() {
    while(this.isDisplayRice === false)
    {
      this.isDisplayRice = true;
      this.isDisplayEntree = false;
      this.isDisplayNouille = false;
      this.isDisplaySoup = false;
      this.isDisplayDessert = false;
    }
  }

  showMenuDessert() {
    while(this.isDisplayDessert === false)
    {
      this.isDisplayRice = false;
      this.isDisplayEntree = false;
      this.isDisplayNouille = false;
      this.isDisplaySoup = false;
      this.isDisplayDessert = true;
    }
  }
}
