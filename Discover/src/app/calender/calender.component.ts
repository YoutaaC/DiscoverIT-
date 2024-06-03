import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Event } from '../models/event.model';
import Swal from 'sweetalert2';
declare var createGoogleEvent: any;
declare const gapi: any; 
declare var google: any;


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit{
  event!:Event;
  eventId! :number;
  accessToken!: any;
  currentUser!: User;
  currentId! :number;

  appointmentForm!: FormGroup;

  CLIENT_ID = "1091432199733-svgrbjbecdgj2k86rhoas9s5mpjoio4d.apps.googleusercontent.com";
  API_KEY = "AIzaSyBJV5uyPVrIU0gtDCwAv1dg0lvKSJ9ln7g";
  DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  SCOPES = "https://www.googleapis.com/auth/calendar.events";
  tokenClient: any;
  gapiInited = false;
  gisInited = false;

  constructor(private fb: FormBuilder,private eventService:EventService, private route:ActivatedRoute,private userService : UserService,private router : Router) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      appointmentTime: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.loadGapi();
    this.loadGis();

    this.eventId=+this.route.snapshot.paramMap.get('id')!;
    this.getEventById();
  }

  getEventById(){
    this.eventService.getEventById(this.eventId).subscribe(eventt =>
      {
        this.event=eventt
      })
  }

  loadGapi() {
    const script = document.createElement('script');
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => this.gapiLoaded();
    document.body.appendChild(script);
  }

  gapiLoaded() {
    gapi.load("client", this.initializeGapiClient.bind(this));
  }

  async initializeGapiClient() {
    await gapi.client.init({
      apiKey: this.API_KEY,
      discoveryDocs: [this.DISCOVERY_DOC],
    });
    this.gapiInited = true;
  }

  loadGis() {
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = () => this.gisLoaded();
    document.body.appendChild(script);
  }

  gisLoaded() {
    this.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: this.CLIENT_ID,
      scope: this.SCOPES,
      callback: '',
    });
    this.gisInited = true;
  }

  scheduleMeeting(formData: any) {
    if (this.gapiInited && this.gisInited) {
      let appointmentTime = new Date(this.appointmentForm.value.appointmentTime);
      const startTime = appointmentTime.toISOString();
      const endTime = this.getEndTime(appointmentTime);
      const eventDetails = {
        email: this.appointmentForm.value.email,
        startTime: startTime,
        endTime: endTime,
      };
      console.info(eventDetails);
      this.createGoogleEvent(eventDetails);
    } else {
      console.error('Google API client not initialized.');
    }
  }

  getEndTime(appointmentTime: Date): string {
    const endTime = new Date(appointmentTime);
    endTime.setHours(endTime.getHours() + 1);
    return endTime.toISOString();
  }

  createGoogleEvent(eventDetails: any) {
    this.tokenClient.callback = async (resp: any) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      await this.scheduleEvent(eventDetails);
    };

    if (gapi.client.getToken() === null) {
      this.tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      this.tokenClient.requestAccessToken({ prompt: "" });
    }
  }

  async scheduleEvent(eventDetails: any) {
    const event = {
      summary: "Discover IT",
      location: "Tunis",
      description: "Scheduled via Google Calendar API",
      start: {
        dateTime: eventDetails.startTime,
        timeZone: "UTC",
      },
      end: {
        dateTime: eventDetails.endTime,
        timeZone: "UTC",
      },
      attendees: [{ email: eventDetails.email }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    const request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    request.execute(function (event: any) {
      console.info("Event created: " + event.htmlLink);
      Swal.fire({
        title: "Alarme créée avec succès",
        text:"Vérifiez votre agenda",
        icon: "success"
      });
      
    });
  }
}
