import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminActuComponent } from './admin-actu/admin-actu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { MessagesComponent } from './messages/messages.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DetailsEventComponent } from './details-event/details-event.component';
import { UpdateUserProfilComponent } from './update-user-profil/update-user-profil.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileForgotPasswordComponent } from './profile-forgot-password/profile-forgot-password.component';
import { FavorisProfileComponent } from './favoris-profile/favoris-profile.component';
import { ForumComponent } from './forum/forum.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { HistoriqueLikesComponent } from './historique-likes/historique-likes.component';
import { HistoriqueReservationComponent } from './historique-reservation/historique-reservation.component';
import { AboutVisiteurComponent } from './about-visiteur/about-visiteur.component';
import { ActuVisiteurComponent } from './actu-visiteur/actu-visiteur.component';
import { EventVisiteurComponent } from './event-visiteur/event-visiteur.component';
import { ContactVisiteurComponent } from './contact-visiteur/contact-visiteur.component';

const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent},
  {path:'home', component:HomeComponent},
  {path:'event', component:EvenementComponent},
  {path:'actualite', component:ActualiteComponent},
  {path:'apropos', component:AboutUsComponent},
  {path:'adminUser', component:AdminUserComponent},
  {path:'adminActu', component:AdminActuComponent},
  {path:'adminDashboard', component:AdminDashboardComponent},
  {path:'adminProfile', component:AdminProfileComponent},
  {path:'', component:AccueilComponent},
  {path:'update/:id',component:UpdateUserComponent},
  {path:'updatePost/:id',component:UpdatePostComponent},
  {path:'updateEvent/:id',component:UpdateEventComponent},
  {path:'contactus',component:ContactComponent},
  {path:'profile',component:ProfileComponent},
  {path:'createPost',component:CreatePostComponent},
  {path:'createEvent',component:CreateEventComponent},
  {path:'adminEvent',component:AdminEventComponent},
  {path:'messageAdmin',component:MessagesComponent},
  {path:'reservation/:id',component:ReservationComponent},
  {path:'detailsEvent/:id',component:DetailsEventComponent},
  {path:'UserProfileUpdate',component:UpdateUserProfilComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'UserProfileforgotPassword',component:ProfileForgotPasswordComponent},
  {path:'favoris',component:FavorisProfileComponent},
  {path:'forum',component:ForumComponent},
  {path:'qrCodeee',component:QrcodeComponent},
  {path:'historiqueLikess',component:HistoriqueLikesComponent},
  {path:'historiqueReservationn',component:HistoriqueReservationComponent},
  {path:'V_aboutUs',component:AboutVisiteurComponent},
  {path:'V_actu',component:ActuVisiteurComponent},
  {path:'V_event',component:EventVisiteurComponent},
  {path:'V_contact',component:ContactVisiteurComponent}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
