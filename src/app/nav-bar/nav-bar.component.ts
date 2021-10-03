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

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
      document.getElementById('navigateur')?.classList.add('sticky');
    }
    else
    {
      document.getElementById('navigateur')?.classList.remove('sticky');
    }
}
}
