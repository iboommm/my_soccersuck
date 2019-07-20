import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";
import axios from "axios";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  news_big_headine: Object = undefined;
  news_big_list: Array<true> = [];
  news_today_list: Array<true> = [];
  news_yesterday_list: Array<true> = [];

  constructor() {
    axios
      .get(`${environment.base_api}/home`)
      .then(res => {
        this.news_big_headine = res.data.data.big_news;
        this.news_big_list = res.data.data.big_news_list;
        this.news_today_list = res.data.data.news_today_list;
        this.news_yesterday_list = res.data.data.news_yesterday_list;
      })
      .catch(err => console.error(err));
  }

  ngOnInit() {}
}
