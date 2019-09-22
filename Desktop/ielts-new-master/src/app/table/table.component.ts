import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogexampleComponent } from '../dialogexample/dialogexample.component';
import { EnterpriseService } from 'src/app/enterprise.service';
import { DialogEnterprisecreateComponent } from '../dialog-enterprisecreate/dialog-enterprisecreate.component';
import { Router } from '@angular/router';
import { GlobalcolorService } from '../globalcolor.service';
import { MatIconRegistry, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { UserModel } from '../allusers/allusers.component';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth,Storage } from 'aws-amplify';
import { ImageCardComponent } from '../image-card/image-card.component';
   
export interface PeriodicElement {
  E_id: string,
  E_name: string,
  E_discription: string,
  E_Address: string,
  E_primary_email: string,
  E_primary_mobile: string,
  E_reference_code: string,
  E_logo_url: string
}

 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position','E_id', 'E_name', 'E_discription', 'E_Address', 'E_primary_email', 'E_primary_mobile', 'E_reference_code', 'E_logo_url','Actions'];
  noDB = false;
  model:any;
  selectedFile: File = null;
   selectedFile1;
   useremail;
  kk={'background-color':'#F9D71C'};
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor( private http:HttpClient,private amplifyService: AmplifyService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public dialog: MatDialog, private enterprise: EnterpriseService,private router:Router,private gservice:GlobalcolorService) {
    iconRegistry.addSvgIcon(
      'delete',
       sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/delete.svg'));
       iconRegistry.addSvgIcon(
      'edit',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/edit.svg')); 
        iconRegistry.addSvgIcon(
          'eye',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/eye.svg')); 
        Auth.currentAuthenticatedUser({
          bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      }).then(user => {
        
        
        
        console.log(user);
      var ss = user.signInUserSession.idToken.jwtToken;
      var ss1 = user.signInUserSession.idToken.payload.email;
      this.useremail=ss1;
        this.enterprise.getEnterpriseAPICallprod(ss).subscribe( res => {
          this.model = new MatTableDataSource<PeriodicElement>(res);
          this.model.sort = this.sort;
          this.model.paginator = this.paginator;     
     
        });
      })
      .catch(err => console.log(err));        
        
     }

  openDialog(element):void {
     const openDialogRef=this.dialog.open(DialogexampleComponent,{
      width:'500px',
      data:element
    
    });

    openDialogRef.afterClosed().subscribe(result=>{
      console.log("Table.....");
       console.log(result);
      if(result!==undefined){
      var data = Object.assign(this.model.filteredData);
   
     var tt =  data.findIndex(d=>d.U_id===element.U_id);
     
        data.splice(tt,1);
        data.splice(tt, 0, result.value);
        this.model = new MatTableDataSource<PeriodicElement>(data);
        this.model.sort = this.sort;
        this.model.paginator = this.paginator;
      }
  
   })
  
  }
  openDialogToCreate(){
     const openDialogRef= this.dialog.open(DialogEnterprisecreateComponent,{
      width:'500px',
    
     
    });
    openDialogRef.afterClosed().subscribe(result=>{
      console.log("after new enterprise creation.....");
      //console.log(result.value);
      if(result!==undefined){
        console.log("not defined");

        var data = Object.assign(this.model.filteredData);
   
      
         data.splice(0, 0, result.value);
        this.model = new MatTableDataSource<PeriodicElement>(data);
        this.model.sort = this.sort;
        this.model.paginator = this.paginator;


      }else{
        console.log("before undefined");

        console.log("undefined");

      }
    })
    
  }

  ngOnInit() {

   
  }
  delete(element){
    var email = element.E_primary_email
    var newStr = email.replace(/@/g, '');
    var username = newStr.split(".").join("");
    var databody1 = {username:username}

    this.enterprise.deleteAdminUserM(databody1).subscribe(data1=>{

      if(data1.status==="User Deleted"){

      var databody = {E_id:element.E_id}
      this.enterprise.deleteEnterpriseAPICall(databody).subscribe(data=>{
        var data = Object.assign(this.model.filteredData);
    
        var tt =  data.findIndex(d=>d.E_id===element.E_id);
        
           data.splice(tt,1);
           this.model = new MatTableDataSource<UserModel>(data);
           this.model.sort = this.sort;
           this.model.paginator = this.paginator;
        
          console.log(data);
       
      })
    }else{

    }
    })
    
   }
   gotollusers(pp){
        this.router.navigate(['/dashboard/allusers']);
        this.gservice.setTheValue(pp);
      }

       
        
      openTOSeeImage(element):void {

        Storage.get(element.E_logo_url)
        .then(result => {
          console.log("Image Upload");
          console.log(result);
        
          const openDialogRef=this.dialog.open(ImageCardComponent,{
            width:'350px',
            data:{url:result}
          
          });
      
        })
            


        .catch(err => console.log(err));

        
      }
      
    }
      
    
