import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Business App';
  showFiller = false;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  below = new FormControl(this.positionOptions[1]);
  public isVisited = false; 
  public subMenuDashboard = false;

  initiateSearch() {
    let searchBar : HTMLElement = document.getElementById('searchbar-components') as HTMLElement;
    let toolBar : HTMLElement = document.getElementById('toolbar-components') as HTMLElement;
    searchBar.classList.remove('d-none');
    toolBar.classList.add('d-none');
  }

  closeSearch() {
    let searchBar : HTMLElement = document.getElementById('searchbar-components') as HTMLElement;
    let toolBar : HTMLElement = document.getElementById('toolbar-components') as HTMLElement;
    searchBar.classList.add('d-none');
    toolBar.classList.remove('d-none');
  }

  checkVisited() {
    console.log('Calling function checkVisited()');
    this.isVisited = !this.isVisited;
    console.log('isVisited: ', this.isVisited);
  }

  toggleSubMenuDashboards() {
    console.log('Calling toggleSubMenuDashboard()');
    this.subMenuDashboard = !this.subMenuDashboard;
    let dashboardArrow : HTMLElement = document.getElementById('dashboard-arrow') as HTMLElement;
    if(this.subMenuDashboard) {
      dashboardArrow.style.transform = 'rotate(90deg)';
    }
    else {
      dashboardArrow.style.transform = 'rotate(0deg)';
    }
  }
}
