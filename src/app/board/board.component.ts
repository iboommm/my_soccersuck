import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";
import axios from "axios";
import _ from "lodash";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {

  tabs: Array<Object> = [
    { id: 1, icon: "futbol-o", name: "บอลนอก", list: [], page: 1 },
    { id: 5, icon: "comments", name: "วาไรตี้", list: [], page: 1 },
    { id: 9, icon: "gamepad", name: "เกมส์", list: [], page: 1 },
    { id: 16, icon: "signing", name: "การเมือง", list: [], page: 1 }
  ];

  constructor() {
    _.each(this.tabs, tab => {
      this.getBoard(tab);
    });
  }

  ngOnInit() {}

  getBoard(tab) {
    axios
      .get(`${environment.base_api}/board/${tab.id}`)
      .then(res => {
        tab.list = res.data.data.topic;
      })
      .catch(err => console.error(err));
  }

  event() {
    console.log("test");
  }
}
