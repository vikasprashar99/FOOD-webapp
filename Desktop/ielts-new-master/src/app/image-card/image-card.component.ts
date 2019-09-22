import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export interface DialogData {
  url: string;
}
@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
xx;

  constructor(public dialogRef: MatDialogRef<ImageCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {


   }

  ngOnInit() {
  }
  noOneClicked(): void {
    this.dialogRef.close();
  }
  ok(){
    this.dialogRef.close();
  }
}
