import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from "../../shared/layout/sidebar/sidebar.component";

@Component({
  selector: 'app-page-dashboard',
  imports: [SidebarComponent],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.css'
})
export class PageDashboardComponent {

}
