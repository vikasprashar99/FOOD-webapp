 import { Component, OnInit } from "@angular/core";
import { GlobalcolorService } from "../../globalcolor.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EnterpriseService } from "../../enterprise.service";
import { NotificationModel } from "../../notification-model";
import { EglobalService } from 'src/app/services/eglobal.service';

@Component({
  selector: 'app-enterprisenotification',
  templateUrl: './enterprisenotification.component.html',
  styleUrls: ['./enterprisenotification.component.css']
})
export class EnterprisenotificationComponent implements OnInit { 
  kk = { "background-color": "#F9D71C", color: "white" };
  Myform = new FormGroup({
    Title: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])
  });
  status;

  constructor(
     private enterprise: EnterpriseService,
    private egservice:EglobalService
  ) {

    // this.gservice.setTheValue(3);
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
    body.topic = this.egservice.enterpriseID;
    body.title = this.Myform.value.Title;
    body.message = this.Myform.value.message;
    this.enterprise.sendNotificationAPICalltopic(body).subscribe(result => {
      console.log(result);
      alert("Message sent successfully");
      this.Myform.reset();
    });
  }
}
