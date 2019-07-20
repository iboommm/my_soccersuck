import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { DomSanitizer } from "@angular/platform-browser";
import axios from "axios";
import _ from "lodash";
import timeago from 'time-ago';

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.css"]
})
export class TopicComponent implements OnInit {
  id: number = 1;
  topic = undefined;
  comment = [];

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.id = this.route["paramMap"]["source"]["_value"]["id"];
    if (!this.id) this.router.navigate(["/home"]);

    console.log("id => ", this.id);

    axios
      .get(`${environment.base_api}/topic/${this.id}`)
      .then(res => {
        this.topic = res.data.data.topic;
        this.topic.create_time = timeago.ago(new Date(this.topic.create_time))
        this.comment = _.map(res.data.data.comment, row => {
          row.create_time = timeago.ago(new Date(row.create_time))
          return row;
        });
      })
      .catch(err => console.error(err));
  }

  generate(html) {
    html = this.replaceAll(
      html,
      `<iframe width="425" height="350"`,
      `<iframe width="100%" height="250"`
    );
    html = this.replaceAll(html, `<img `, `<img class="img-fluid" `);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {}

  replaceAll = function(str, search, replacement) {
    var newStr = "";
    if (_.isString(str)) {
      // maybe add a lodash test? Will not handle numbers now.
      newStr = str.split(search).join(replacement);
    }
    return newStr;
  };

  gotop() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
}
