import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AdmincomponentComponent } from "./admincomponent/admincomponent.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule
} from "@angular/material";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { MatPaginatorModule } from "@angular/material/paginator";
import { RequestsComponent } from "./requests/requests.component";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderDetailscomponentComponent } from "./order-detailscomponent/order-detailscomponent.component";

@NgModule({
  declarations: [
    AppComponent,
    AdmincomponentComponent,
    RequestsComponent,
    OrderDetailscomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule,

    // FlexLayoutModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
