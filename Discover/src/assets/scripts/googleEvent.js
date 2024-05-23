const CLIENT_ID = "1091432199733-svgrbjbecdgj2k86rhoas9s5mpjoio4d.apps.googleusercontent.com";
const API_KEY = "AIzaSyBJV5uyPVrIU0gtDCwAv1dg0lvKSJ9ln7g";
const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/calendar";

let tokenClient;
let gapiInited = false;
let gisInited = false;

function gapiLoaded() {
  gapi.load("client", initializeGapiClient);
}

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
}

function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: "", // will be set later
  });
  gisInited = true;
}

function createGoogleEvent(eventDetails) {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    await scheduleEvent(eventDetails);
  };

  if (gapi.client.getToken() === null) {
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    tokenClient.requestAccessToken({ prompt: "" });
  }
}

async function scheduleEvent(eventDetails) {
  const event = {
    summary: "Google I/O 2015",
    location: "Manzah 6",
    description: "Event Alert",
    start: {
      dateTime: eventDetails.startTime,
      timeZone: "Africa/Tunis",
    },
    end: {
      dateTime: eventDetails.endTime, // Assuming eventDetails contains an endTime
      timeZone: "Africa/Tunis",
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
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

  request.execute((event) => {
    console.info("Event created: " + event.htmlLink);
  });
}