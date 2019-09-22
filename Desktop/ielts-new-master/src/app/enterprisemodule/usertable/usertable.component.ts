import { Component, OnInit, ViewChild } from "@angular/core";
import { EglobalService } from "src/app/services/eglobal.service";
import { ApiserviceService } from "src/app/services/apiservice.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { EnterpriseService } from "../../enterprise.service";
import { GlobalcolorService } from "../../globalcolor.service";
import {
  MatIconRegistry,
  MatTableDataSource,
  MatPaginator,
  MatSort
} from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { DialogallusersComponent } from "../../dialogallusers/dialogallusers.component";
import { ActivatedRoute, Router } from "@angular/router";

export interface UserModel {
  U_id: string;
  U_mobile: string;
  U_email: string;
  U_idproof: string;
  U_highestquilifications: string;
  U_ielts_score: string;
  U_ielts_reading: string;
  U_ielts_writing: string;
  U_ielts_speaking: string;
  U_ielts_listening: string;
  U_ielts_CSR: string;
  U_change_status: string;
  U_change_edit_status: string;
  U_message: string;
  U_additional_comment: string;
  U_visa_status: string;
  E_idEditDelete: string;
}

@Component({
  selector: "app-usertable",
  templateUrl: "./usertable.component.html",
  styleUrls: ["./usertable.component.css"]
})
export class UsertableComponent implements OnInit {
  id: any;
  model: any;
  abcd: UserModel[] = [];
  enterpriseIDDeatils: any;

  displayedColumns: string[] = [
    "position",
    "U_id",
    "U_mobile",
    "U_email",
    "U_idproof",
    "U_highestquilifications",
    "U_ielts_score",
    "U_ielts_reading",
    "U_ielts_writing",
    "U_ielts_speaking",
    "U_ielts_listening",
    "U_ielts_CSR",
    "U_change_status",
    "U_change_edit_status",
    "U_message",
    "U_additional_comment",
    "U_visa_status",
    "E_id",
    "Actions"
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private egservice: EglobalService,
    private apiservice: ApiserviceService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private enterprise: EnterpriseService,
    private gservice: GlobalcolorService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    // this.gservice.setTheValue(0);

    var body = { E_primary_email: this.egservice.emailid };
    this.apiservice.findEnterpriseIDUsingEmail(body).subscribe(result => {
      console.log(result[0].E_id);
      this.enterpriseIDDeatils = result[0].E_id;
      this.enterprise.eid = this.enterpriseIDDeatils;
      this.egservice.enterpriseID = result[0].E_id;

      var databody: any = { E_id: this.egservice.enterpriseID };
      this.enterprise
        .getusersUnderEnterpriseIDAPICall(databody)
        .subscribe(res => {
          console.log(res);
          //this.model = res;
          //  this.model2 = res;
          this.model = new MatTableDataSource<UserModel>(res);
          this.model.sort = this.sort;
          this.model.paginator = this.paginator;
          console.log(res);
        });
    });
    iconRegistry.addSvgIcon(
      "delete",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/examples/delete.svg")
    );
    iconRegistry.addSvgIcon(
      "edit",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/examples/edit.svg")
    );
  }

  ngOnInit() {
    console.log("ngOnI");
  }
  ngOnChange() {}
  openDialogEdit(element: any): void {
    const openDialogRef = this.dialog.open(DialogallusersComponent, {
      width: "500px",
      data: element
    });
    openDialogRef.afterClosed().subscribe(result => {
      var data = Object.assign(this.model.filteredData);

      var tt = data.findIndex(d => d.U_id === element.U_id);

      data.splice(tt, 1);
      data.splice(tt, 0, result.value);
      this.model = new MatTableDataSource<UserModel>(data);
      this.model.sort = this.sort;
      this.model.paginator = this.paginator;
    });
  }

  delete(element) {
    var databody = { U_id: element.U_id };
    this.enterprise.deleteUserIdIDAPICall(databody).subscribe(res => {
      console.log(res);
      var data = Object.assign(this.model.filteredData);

      var tt = data.findIndex(d => d.U_id === element.U_id);

      data.splice(tt, 1);
      this.model = new MatTableDataSource<UserModel>(data);
      this.model.sort = this.sort;
      this.model.paginator = this.paginator;

      //console.log(data);
    });
  }
}
