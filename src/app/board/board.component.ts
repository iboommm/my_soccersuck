import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";
import axios from "axios";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board_list: Array<true> = [];
  id: Number = 1;

  constructor(private route: ActivatedRoute) {
    this.id = this.route['paramMap']['source']['_value']['id'];
    axios
      .get(`${environment.base_api}/board/${this.id}`)
      .then(res => {
        this.board_list = res.data.data.topic;
      })
      .catch(err => console.error(err));
   }

  ngOnInit() {
  }

}
