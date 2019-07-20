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

  constructor(private router: Router) {}

  router_color(mode) {
    if (_.includes(this.router.url, mode)) {
      return true;
    }
    return false;
  }

  go(page) {
    if (page == "board") {
      console.log(`/board/${this.board}`)
      this.router.navigateByUrl(`/board/${this.board}`);
    }
    this.router.navigateByUrl(`/${page}`);
  }
}
