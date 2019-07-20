import { Component } from "@angular/core";
import { Router } from "@angular/router";
import _ from 'lodash';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Soccersuck";
  board: Number = 1;

  navLinks = [
    {path: "/home", label: "หน้าแรก"},
    {path: "/board", label: "เว็บบอร์ด"},
    {path: "/topic", label: "กระทู้"}
  ]

  constructor(private router: Router) {}

  router_color(mode) {
    if (_.includes(this.router.url, mode)) {
      return true;
    }
    return false;
  }
}
