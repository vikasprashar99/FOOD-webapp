import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
import { MatFileUploadModule } from "angular-material-fileupload";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material";

import {
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatDialogModule,
  MatIconModule,
  MatDividerModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  MatChipsModule,
  MatToolbarModule,
  MatProgressBarModule
} from "@angular/material";
import { AddformComponent } from "./addform/addform.component";
import { DialogexampleComponent } from "./dialogexample/dialogexample.component";
import { DialogEnterprisecreateComponent } from "./dialog-enterprisecreate/dialog-enterprisecreate.component";
import { UsersComponent } from "./users/users.component";
import { AllusersComponent } from "./allusers/allusers.component";
import { DialogallusersComponent } from "./dialogallusers/dialogallusers.component";
import { MessagemanagementComponent } from "./messagemanagement/messagemanagement.component";
import { SigninComponent } from "./signin/signin.component";
import { FormUploadComponent } from "./form-upload/form-upload.component";
import { EnterPriseDashboardComponent } from "./enter-prise-dashboard/enter-prise-dashboard.component";
import { NewpasswordrequiredComponent } from "./newpasswordrequired/newpasswordrequired.component";
import { MainComponent } from "./main/main.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ImageCardComponent } from "./image-card/image-card.component";
import { NotificationComponent } from './notification/notification.component';
import { UsertableComponent } from './enterprisemodule/usertable/usertable.component';
import { MessageComponent } from './enterprisemodule/message/message.component';
import { EnterprisenotificationComponent } from './enterprisemodule/enterprisenotification/enterprisenotification.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddformComponent,
    DialogexampleComponent,
    DialogEnterprisecreateComponent,
    UsersComponent,
    AllusersComponent,
    DialogallusersComponent,
    MessagemanagementComponent,
    SigninComponent,
    FormUploadComponent,
    EnterPriseDashboardComponent,
    NewpasswordrequiredComponent,
    MainComponent,
    ForgotPasswordComponent,
    ImageCardComponent,
    NotificationComponent,
    UsertableComponent,
    MessageComponent,
    EnterprisenotificationComponent,
   ],
  entryComponents: [
    DialogexampleComponent,
    DialogEnterprisecreateComponent,
    DialogallusersComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatChipsModule,
    MatSortModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    AmplifyAngularModule,
    MatNativeDateModule,
    MatFileUploadModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatFormFieldModule
  ],
  providers: [AmplifyService],
  bootstrap: [MainComponent]
})
export class AppModule {}
