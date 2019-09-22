import { Component, OnInit } from "@angular/core";
import { GlobalcolorService } from "../globalcolor.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EnterpriseService } from "../enterprise.service";
import { NotificationModel } from "../notification-model";

@Component({
  selector: "app-addform",
  templateUrl: "./addform.component.html",
  styleUrls: ["./addform.component.css"]
})
export class AddformComponent implements OnInit {
  kk = { "background-color": "#F9D71C", color: "white" };
  Myform = new FormGroup({
    Title: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])
  });
  status;

  constructor(
    private gservice: GlobalcolorService,
    private enterprise: EnterpriseService
  ) {
    this.gservice.setTheValue(3);
  }

  ngOnInit() {}
  callAndroid(k) {
    status = k;
  }
  calliOS(k) {
    status = k;
  }
  clicked() {
    var body = new NotificationModel();
    body.title = this.Myform.value.Title;
    body.message = this.Myform.value.message;
    this.enterprise.sendNotificationAPICall(body).subscribe(result => {
      console.log(result);
      alert("Message sent successfully");
      this.Myform.reset();
    });
  }
}
