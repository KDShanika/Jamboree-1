
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

//Bootstrap, ng Forms and Angular Material
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatInputModule ,  MatButtonModule , MatSortModule , MatSort} from '@angular/material' ;

//Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

//website Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './SharedComponents/navbar/navbar.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

//Website Components - Admin
import { AdminComponent } from './Admin/admin.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ProfileInsightsComponent } from './Admin/profile-insights/profile-insights.component';
import { UserDataComponent } from './Admin/userdata/userdata.component';

//Services
import { AuthenticationService } from './Shared/authentication.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GetUserService } from "./Shared/get-user.service";
import { UserService } from './BackendConfig/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    ProfileInsightsComponent,
    UserProfileComponent,
    EditUserComponent,
    UserDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,

    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSortModule,

    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  providers: [
    UserService,
    AuthenticationService,
    GetUserService,
    MatSort,
  ],
  bootstrap: [AppComponent],
  schemas:   [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  
 }
