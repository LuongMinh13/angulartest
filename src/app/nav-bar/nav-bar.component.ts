import { Component, OnInit, HostListener} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  button_toggle:Boolean = false;

  clickEvent(){
    if(this.button_toggle == false)
    {
      this.button_toggle = true;
    }
    else{
      this.button_toggle = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (window.scrollY > 100) 
    {
      document.getElementById('navigateur')?.classList.add('sticky');
    }
    else
    {
      document.getElementById('navigateur')?.classList.remove('sticky');
    }
}

}
