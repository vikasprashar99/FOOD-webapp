import { Component, OnInit } from "@angular/core";
import { GlobalcolorService } from "../../globalcolor.service";
import { EnterpriseService } from "../../enterprise.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

let dateFormat = require("dateformat");
let now = new Date();
let x;
let y;
let z;
let EID;
dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss.sss");
export class messagesall {
  messages: string;
  uid: string;
  io: string;
  date: Date;
}
@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  panelOpenState = false;
  jstoday = "";
  showModal = false;
  i;
  j;
  mainArray = [];
  newdate;

  today = new Date();
  z = this.today.getFullYear();
  x = this.today.getDate();

  myvar: messagesall[] = [];
  Myform = new FormGroup({
    // mess: new FormControl("", [Validators.required]),
    id: new FormControl("", [Validators.required])
  });
  p;
  date: Date;
  hi: number = Date.now();
  currentdate = new Date();
  arr: any[] = [];
  m: string;
  constructor(
    private gservice: GlobalcolorService,
    private enterprise: EnterpriseService
  ) {
    this.gservice.setTheValue(2);
  }

  ngOnInit() {
    this.enterprise.getMessageAPICall().subscribe(res => {
      console.log(res);
      const distinct = [...new Set(res.map(x => x.U_id))];

      res.forEach((element: any) => {
        console.log(element.E_id);
        EID = element.E_id;
      });

      if (this.enterprise.eid == EID) {
        for (var i = 0; i < distinct.length; i++) {
          this.arr = this.arr.concat(distinct[i]);
        }
        console.log(this.arr);
        this._extractMessages();
      } else {
        console.log("no message for that eid");
        alert("No message for this EID");
      }
    });
    this.date = new Date();
  }
  // corrcted datetimeformat
  public datenew() {
    if (this.today.getMonth() < 10) {
      var we = (y = this.today.getMonth() + 1);
      return "0" + we;
    } else {
      return (y = this.today.getMonth() + 1);
    }
  }
  public myfunc1() {
    if (this.today.getHours() < 10) return "0" + this.today.getHours();
    else return this.today.getHours();
  }
  public myfunc2() {
    if (this.today.getMinutes() < 10) return "0" + this.today.getMinutes();
    else return this.today.getMinutes();
  }
  public myfunc3() {
    if (this.today.getSeconds() < 10) return "0" + this.today.getSeconds();
    else return this.today.getSeconds();
  }
  public myfunc4() {
    if (this.today.getMilliseconds() < 10)
      return "00" + this.today.getMilliseconds();
    else return this.today.getMilliseconds();
  }
  public day() {
    if (this.today.getDate() < 10) {
      var we = JSON.stringify((y = this.today.getDate()));
      return "0" + we;
    } else {
      return (y = this.today.getDate());
    }
  }

  public _extractMessages() {
    this.mainArray = [];

    this.enterprise.getMessageAPICall().subscribe(res => {
      console.log(res);
      for (const i in this.arr) {
        const obArray = [];
        let ob = Object.assign({ id: "", array: [] });
        console.log(this.enterprise.eid);

        for (const e in res) {
          if (this.arr[i] === res[e].U_id) {
            console.log(res[e].E_id);
            const obMessages = new messagesall();
            obMessages.messages = res[e].message;
            obMessages.date = res[e].date;
            obArray.push(obMessages);
          }
        }
        obArray.sort((a, b) => {
          return a.date - b.date;
        });
        ob.id = this.arr[i];
        ob.array = obArray;
        //this.myvar.push(ob);
        this.mainArray.push(ob);
      }
    });
  }

  send(selected: any) {
    // for (const e in this.mainArray) this.mainArray[e].obArray.push();

    if (this.Myform.value.id == "") {
      alert("Nothing Written");
    } else {
      this.today = new Date();
      const body = {
        Message_id:
          this.z +
          "-" +
          this.datenew() +
          "-" +
          this.day() +
          " " +
          this.myfunc1() +
          ":" +
          this.myfunc2() +
          ":" +
          this.myfunc3() +
          "." +
          this.myfunc4(),
        message: this.Myform.value.id,
        message_sender: EID,
        U_id: selected.id,
        date: this.z + "-" + this.datenew() + "-" + this.day()
      };
      console.log(body);

      this.enterprise.postMessageAPICall(body).subscribe(result => {
        console.log(result);
        this.Myform.reset();

        this._extractMessages();
      });
    }
  }
}
