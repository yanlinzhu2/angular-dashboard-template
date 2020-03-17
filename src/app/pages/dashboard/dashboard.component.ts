import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isCollapsed: boolean = false;
  displayedName: string = null;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("FinWhiz")
    this.getCurrentUser();
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("finWhizLoginKey"));
    this.displayedName = user["displayedName"];
  }

}
