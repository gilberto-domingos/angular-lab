import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router){}

  eventsend(){    
    this.router.navigate(['/event-send']);
  }

  eventreceive(){    
    this.router.navigate(['/event-receive']);
  }

  sibling(){    
    this.router.navigate(['/sibling']);
  }  

  output(){    
    this.router.navigate(['/output']);
  } 

  binding(){    
    this.router.navigate(['/binding']);
  } 

}
