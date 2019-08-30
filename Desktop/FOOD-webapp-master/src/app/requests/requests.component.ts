import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";

export interface PeriodicElement {
  uuid: any;
  date: any;
  time: any;
  Startupname: any;
  name: any;
  message: any;
  approve: any;
  decline: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: "Vikas",
    uuid: "1",
    date: "27/10/2019",
    time: "10-1 PM",
    Startupname: "Placio",
    message: "FOR meeting",
    approve: "",
    decline: ""
  }
];

@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.css"]
})
export class RequestsComponent implements OnInit {
  displayedColumns = [
    "uuid",
    "date",
    "time",
    "Startupname",
    "name",
    "message",
    "approve",
    "decilne"
  ];
  dataSource = ELEMENT_DATA;

  constructor(private route: Router) {}

  ngOnInit() {}
}
