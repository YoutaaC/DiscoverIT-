import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminActuComponent } from './admin-actu/admin-actu.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { NavVisiteurComponent } from './nav-visiteur/nav-visiteur.component';
import { ImageComponent } from './image/image.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MessagesComponent } from './messages/messages.component';
import { QRCodeModule } from 'ngx-qrcode';
import { DetailsEventComponent } from './details-event/details-event.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdateUserProfilComponent } from './update-user-profil/update-user-profil.component';
import { ProfileForgotPasswordComponent } from './profile-forgot-password/profile-forgot-password.component';
import { FavorisProfileComponent } from './favoris-profile/favoris-profile.component';
import { ForumComponent } from './forum/forum.component';
import { HistoriqueReservationComponent } from './historique-reservation/historique-reservation.component';
import { HistoriqueLikesComponent } from './historique-likes/historique-likes.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { ActuVisiteurComponent } from './actu-visiteur/actu-visiteur.component';
import { EventVisiteurComponent } from './event-visiteur/event-visiteur.component';
import { AboutVisiteurComponent } from './about-visiteur/about-visiteur.component';
import { ContactVisiteurComponent } from './contact-visiteur/contact-visiteur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EvenementComponent,
    ActualiteComponent,
    SigninComponent,
    SignupComponent,
    AdminDashboardComponent,
    AdminUserComponent,
    AdminActuComponent,
    AdminProfileComponent,
    AboutUsComponent,
    AccueilComponent,
    UpdateUserComponent,
    ProfileComponent,
    ContactComponent,
    NavVisiteurComponent,
    ImageComponent,
    CreatePostComponent,
    CreateEventComponent,
    UpdatePostComponent,
    UpdateEventComponent,
    AdminEventComponent,
    ReservationComponent,
    MessagesComponent,
    DetailsEventComponent,
    ForgotPasswordComponent,
    UpdateUserProfilComponent,
    ProfileForgotPasswordComponent,
    FavorisProfileComponent,
    ForumComponent,
    HistoriqueReservationComponent,
    HistoriqueLikesComponent,
    QrcodeComponent,
    ActuVisiteurComponent,
    EventVisiteurComponent,
    AboutVisiteurComponent,
    ContactVisiteurComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,BrowserModule,QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
