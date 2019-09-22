import { Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
 import { MatDialog } from '@angular/material';
import { EnterpriseService } from '../enterprise.service';
import { DialogallusersComponent } from '../dialogallusers/dialogallusers.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { GlobalcolorService } from '../globalcolor.service';

export interface UserModel{ 
  U_id :string,
  U_mobile :string,  
  U_email :string,
  U_idproof :string,
  U_highestquilifications :string,
  U_ielts_score :string,
  U_ielts_reading :string,
   U_ielts_writing  :string,
  U_ielts_speaking:string,
  U_ielts_listening  :string,
  U_ielts_CSR :string,
  U_change_status :string,
  U_change_edit_status :string,  
  U_message :string,
  U_additional_comment :string,  
  U_visa_status :string,
  E_idEditDelete:string,
  }
  
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  id:any;
   displayedColumns: string[] = ['position', 'U_id', 'U_mobile', 'U_email','U_idproof', 'U_highestquilifications' , 'U_ielts_score', 'U_ielts_reading',  'U_ielts_writing' , 'U_ielts_speaking','U_ielts_listening' , 'U_ielts_CSR' , 'U_change_status' ,'U_change_edit_status' , 'U_message', 'U_additional_comment' , 'U_visa_status', 'E_id',  'Actions'];
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort, {static: true}) sort: MatSort;

   abcd :UserModel[] = []
    model:any ;
    model2;
   constructor(public dialog: MatDialog, private enterprise: EnterpriseService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private gservice:GlobalcolorService) { 
    
      this.gservice.setTheValue(1);
    
    iconRegistry.addSvgIcon(
      'delete',
       sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/delete.svg'));
       iconRegistry.addSvgIcon(
      'edit',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/edit.svg'));
    this.enterprise.getAllUserAPICall().subscribe(res=>{
    this.model2 = res;
    this.model = new MatTableDataSource<UserModel>(res);
    this.model.sort = this.sort;
    this.model.paginator = this.paginator;
     
  })

  
 }
 ngOnInit() {
 
}
 openDialogEdit(element:any):void { 
 
  const openDialogRef= this.dialog.open(DialogallusersComponent,{
    width:'500px',
    data:element
  
  });
  openDialogRef.afterClosed().subscribe(result=>{
      var data = Object.assign(this.model.filteredData);
  
    var tt =  data.findIndex(d=>d.E_id===element.E_id);
    
       data.splice(tt,1);
       data.splice(tt, 0, result.value);
       this.model = new MatTableDataSource<UserModel>(data);
       this.model.sort = this.sort;
       this.model.paginator = this.paginator;
 
  })

}

delete(element){
  var databody = {'U_id':element.U_id};
   this.enterprise.deleteUserIdIDAPICall(databody).subscribe(res=>{
    console.log(res);
    var data = Object.assign(this.model.filteredData);
  
    var tt =  data.findIndex(d=>d.U_id===element.U_id);
    
       data.splice(tt,1);
       this.model = new MatTableDataSource<UserModel>(data);
       this.model.sort = this.sort;
       this.model.paginator = this.paginator;
    
      console.log(data);
        
  })

}
ngAfterViewInit() {
}
}
