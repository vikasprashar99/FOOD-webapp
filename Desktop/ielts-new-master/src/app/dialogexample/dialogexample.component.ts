import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl,FormGroup,  FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { EnterpriseService } from 'src/app/enterprise.service';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {  Storage } from 'aws-amplify';

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
  selector: 'app-dialogexample',
  templateUrl: './dialogexample.component.html',
  styleUrls: ['./dialogexample.component.css']
})
export class DialogexampleComponent implements OnInit {
  xx;
  E_id_edit;
  kk={'background-color':'#F9D71C','color':'white'};
  u={'color':'red'};
  value=50;
   kk1={'background-color':'#8B0000','color':'white'};
  cognitoidentityserviceprovider;
  selectedFiles: FileList;
  currentFileUpload: File;
  fileshow=false;
  imageurl=null;
  constructor(
    public dialogRef: MatDialogRef<DialogexampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private fb: FormBuilder, private enterpriseService:EnterpriseService,iconRegistry: MatIconRegistry,sanitizer: DomSanitizer) {
          console.log(data);
          iconRegistry.addSvgIcon(
            'xyz',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/message.svg'));
         this.xx = data;
         this.E_id_edit=this.xx.E_id;
         this.enterprise.setValue({
          E_id: this.xx.E_id, 
          E_name: this.xx.E_name ,
          E_discription: this.xx.E_discription, 
          E_Address:   this.xx.E_Address,
          E_primary_email:  this.xx.E_primary_email,
          E_primary_mobile:  this.xx.E_primary_mobile, 
          E_reference_code:   this.xx.E_reference_code,
          E_logo_url:this.xx.E_logo_url  ,
         })
     }
     enterprise = this.fb.group({
      E_id:  ['',Validators.required],
      E_name: ['',Validators.required],
      E_discription:  [''],
      E_Address:  [''],
      E_primary_email: ['',Validators.required],
      E_primary_mobile:  ['',Validators.required],
      E_reference_code:  ['',Validators.required],
      E_logo_url:  [''],


     })
    submit(){
       console.log(this.enterprise.value);
      Object.keys(this.enterprise.controls).forEach((key) => this.enterprise.get(key).setValue(this.enterprise.get(key).value.trim()));
      this.dialogRef.close(this.enterprise);

      var yy = this.enterprise.value;
      console.log("This old value"+this.E_id_edit);
      console.log("This new value"+yy.E_id);
      if(this.E_id_edit == yy.E_id){
       

      this.enterpriseService.updateEnterpriseAPICall(this.enterprise.value).subscribe(data=>{
        console.log("The data is "+ JSON.stringify(data));
 
      });
    }else{
      var databody = {'E_id':yy.E_id};
       console.log("Reaching");
      this.enterpriseService.findEnterpriseIDAPICall(databody).subscribe(data=>{
        console.log("The data is "+ data.length);
        if(data.length > 0){
          alert('The New E_id '+ yy.E_id +' is already in use');
        }else{
          this.enterpriseService.updateEnterpriseAPICall(this.enterprise.value).subscribe(data=>{
              this.enterpriseService.deleteEnterpriseAPICall({E_id:this.E_id_edit}).subscribe(data=>{
             });
           });
        }

      });
      
    }
      //this.dialogRef.close();
    }
    noOneClick(){
    this.dialogRef.close();
  }


  ngOnInit() {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {  
        this.imageurl =  reader.result;
      }
    }
  }

  upload() {
   this.fileshow = true;
    
    this.currentFileUpload = this.selectedFiles.item(0);
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

    this.selectedFiles = undefined;
  }
}
