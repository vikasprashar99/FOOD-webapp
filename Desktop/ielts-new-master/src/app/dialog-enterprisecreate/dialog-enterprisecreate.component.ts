 
import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl,FormGroup,  FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { EnterpriseService } from 'src/app/enterprise.service';
import { RouterLink, Router } from '@angular/router';
 import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../upload-file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Auth, Storage } from 'aws-amplify';

 export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog-enterprisecreate',
  templateUrl: './dialog-enterprisecreate.component.html',
  styleUrls: ['./dialog-enterprisecreate.component.css']
})
export class DialogEnterprisecreateComponent implements OnInit {
  xx;
  u={'color':'red'};
  value=50;
  E_id_edit;
  kk={'background-color':'#F9D71C','color':'white'};
  kk1={'background-color':'#8B0000','color':'white'};
  cognitoidentityserviceprovider;
  selectedFiles: FileList;
  currentFileUpload: File;
  fileshow=false;
  imageurl=null;
  progress: { percentage: number } = { percentage: 0 };
  constructor(
    public dialogRef: MatDialogRef<DialogEnterprisecreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private fb: FormBuilder, private enterpriseService:EnterpriseService,private router:Router,private uploadService: UploadFileService,iconRegistry: MatIconRegistry,sanitizer: DomSanitizer) {
          console.log(data);
         this.xx = data;
         iconRegistry.addSvgIcon(
          'xyz',
          sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/check.svg'));
         
     }
     enterprise = this.fb.group({
      E_id: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),  
      E_name: new FormControl('',[Validators.required]),
      E_discription:  [''],
      E_Address:  [''],
      E_primary_email: new FormControl('',[Validators.required,Validators.email]),
      E_primary_mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      E_reference_code:  [''],
      E_logo_url:  [''],


     })
    submit(){
      if(this.enterprise.valid){
      this.enterpriseService.checkEnterPriseIDM(this.enterprise.controls['E_id'].value).subscribe(res=>{
        console.log(res);

        
        if(res.status=='success'){
          this.u= {'color':'red'};
          alert("E_id is duplicate ll");


       



        }else{
          this.u= {'color':'green'};
          var phone = '+91'+this.enterprise.controls['E_primary_mobile'].value;

          var email = this.enterprise.controls['E_primary_email'].value;
          var newStr = email.replace(/@/g, '');
          console.log(newStr);
          var ll1 = newStr.split(".").join("");
            console.log(ll1);
             var databody = {
              'username':ll1,
               'email':this.enterprise.controls['E_primary_email'].value,
                'phone':phone,
                'groupname':'enterprise'
            }
              this.enterpriseService.createAdminUserM(databody).subscribe(res=>{
              console.log(res);
                if(res.status=="user created and added in Enterprise"){
                          Object.keys(this.enterprise.controls).forEach((key) => this.enterprise.get(key).setValue(this.enterprise.get(key).value.trim()));
                                
                                                this.enterpriseService.createEnterpriseAPICall(this.enterprise.value).subscribe(data=>{
                                      console.log(data.errno);
                                      if(data.errno==1062){
                                        alert("E_id is duplicate jj");
                            
                                      }else{
                                      this.dialogRef.close(this.enterprise);
                                      }
                              
                                    });
              }else{
                   console.log(res);
                   if(res.status=="UsernameExistsException"){
                     alert("This Email ID is already in use.");
                   }
               }
            })

          

        }
      
      })


    }

      
      


       

       

     // this.dialogRef.close();
    }
    noOneClicked(){
    this.dialogRef.close();
  }


  ngOnInit() {
  }



  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.item(0).type);
   if(this.selectedFiles.item(0).type==="image/jpeg"|| this.selectedFiles.item(0).type==="image/jpeg"||this.selectedFiles.item(0).type==="image/png"){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {  
        this.imageurl =  reader.result;
      }
    }
  }else{
    alert("only jpeg, jpg or png files");
    this.imageurl = undefined;
  }
  }

  upload() {
    if(this.selectedFiles){
    this.progress.percentage = 0;
  this.fileshow = true;
    
   
    this.currentFileUpload = this.selectedFiles.item(0);
    if(this.currentFileUpload.type==="image/jpeg"|| this.currentFileUpload.type==="image/jpg" || this.currentFileUpload.type==="image/png"){
    Storage.put(Date.now()+".jpg", this.currentFileUpload, {
      contentType: 'image/png'
  })
  .then (result =>{
    this.fileshow = false;
    console.log("Hello");
     console.log(result['key'])
    this.enterprise.patchValue({'E_logo_url':result['key']});

  })
  .catch(err => console.log(err));
}else{

  alert("Only jpeg, jpg or png files");
  this.fileshow = false;

}
    this.selectedFiles = undefined;
  }else{
    console.log("select files");
  }

}


  
  checkID(){
    console.log(this.enterprise.controls['E_id'].value);
    var kkk1=this.enterprise.controls['E_id'].value;
    if (this.enterprise.controls['E_id'].value!==""&& kkk1.length===6){
    this.enterpriseService.checkEnterPriseIDM(this.enterprise.controls['E_id'].value).subscribe(res=>{
      console.log(res);
      if(res.status=='success'){
      this.u= {'color':'red'};
      }else{
        this.u= {'color':'green'};

      }

    })
  }else{
    alert("Either string length is not equal to 6 character or it's 0");
  }
}


 uploadText(){
  this.currentFileUpload = this.selectedFiles.item(0);
  Storage.put('example.png', this.currentFileUpload, {
    contentType: 'image/png'
})
.then (result => console.log(result))
.catch(err => console.log(err));
}

}
