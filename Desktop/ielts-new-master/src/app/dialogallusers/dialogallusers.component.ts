import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl,FormGroup,  FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { EnterpriseService } from 'src/app/enterprise.service';
import { RouterLink, Router } from '@angular/router';
import {UserModel} from '../allusers/allusers.component'
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'app-dialogallusers',
  templateUrl: './dialogallusers.component.html',
  styleUrls: ['./dialogallusers.component.css']
})
export class DialogallusersComponent implements OnInit {
  xx;
  E_id_edit;
  EIDS;
  modeselect;
  kk={'background-color':'#F9D71C','color':'#ffffff'};

  constructor(
    public dialogRef: MatDialogRef<DialogallusersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel,private fb: FormBuilder, private enterpriseService:EnterpriseService) {
      console.log("Its here");    
      console.log(data);
        
          this.xx = data;
          this.modeselect = this.xx.E_id;
          this.enterprise.setValue({
            U_id:  this.xx.U_id,
            U_mobile: this.xx.U_mobile,
            U_email: this.xx.U_email,
            U_idproof: this.xx.U_idproof,
            U_highestquilifications: this.xx.U_highestquilifications,
            U_ielts_score:  this.xx.U_ielts_score,
            U_ielts_reading: this.xx.U_ielts_reading,
            U_ielts_writing:  this.xx.U_ielts_writing,
            U_ielts_speaking:this.xx.U_ielts_speaking,
            U_ielts_listening: this.xx.U_ielts_listening,
            U_ielts_CSR:this.xx.U_ielts_CSR,
            U_change_status:this.xx.U_change_status,
            U_change_edit_status:this.xx.U_change_edit_status,
            U_message:this.xx.U_message,
            U_additional_comment:this.xx.U_additional_comment,
            U_visa_status:this.xx.U_visa_status,
            E_id:this.xx.E_id
          })
          this.enterpriseService.getEnterpriseIDSAPICall().subscribe(res=>{
            this.EIDS = res;
            console.log(this.EIDS);

          })
     }
 
     enterprise = this.fb.group({
      U_id:  ['',Validators.required],
      U_mobile: ['',Validators.required],
      U_email: [''],
      U_idproof: [''],
      U_highestquilifications: ['',Validators.required],
      U_ielts_score:  ['',Validators.required],
      U_ielts_reading:  ['',Validators.required],
      U_ielts_writing:  [''],
      U_ielts_speaking:[''],
      U_ielts_listening:[''],
      U_ielts_CSR:[''],
      U_change_status:[''],
      U_change_edit_status:[''],
      U_message:[''],
      U_additional_comment:[''],
      U_visa_status:[''],
      E_id:['']
      })
  ngOnInit() {
  }
  changeClient(value){
    console.log(value);
     this.enterprise.patchValue({'E_id':value});
 
  }



  submit(){
    console.log(this.enterprise.value);
      Object.keys(this.enterprise.controls).forEach((key) => {
       if(this.enterprise.get(key).value!==null&&this.enterprise.get(key).value!==''){
        this.enterprise.get(key).setValue(this.enterprise.get(key).value.trim())
      }else{
        this.enterprise.get(key).setValue('');
      }
    });
    
    this.dialogRef.close(this.enterprise);

     
    // Update Api Call
    if(this.enterprise.get('E_id').value===''){
      this.enterpriseService.updateUpdate_userIDwfkAPICall(this.enterprise.value).subscribe(data=>{
        console.log("The data is "+ JSON.stringify(data));
   
      })
    }else{
    this.enterpriseService.updateUpdate_userIDAPICall(this.enterprise.value).subscribe(data=>{
      console.log("The data is "+ JSON.stringify(data));
 
    })
  }
    
  }
  noOneClicked(){
    this.dialogRef.close();
    }
}
