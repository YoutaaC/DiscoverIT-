const CLIENT_ID = "1091432199733-svgrbjbecdgj2k86rhoas9s5mpjoio4d.apps.googleusercontent.com";
const API_KEY = "AIzaSyBJV5uyPVrIU0gtDCwAv1dg0lvKSJ9ln7g";
const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/calender/v3/rest";
const SCOPES = "https://www.googleapis.com/auth/calender";
let tokenClient;
let gapiInited =false;
let gisIninted =false;

function gapiLoaded(){
gapi.load("client", initializeGapiClient);
}

async function initializeGapiClient(){
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
}

function gisLoaded(){
    tokenClient =google.accounts.oauth2.initTokenClient({
          client_id:CLIENT_ID,
          scope:SCOPES,
          callback:"",
    });
    gisIninted=true;
}

function createGoogleEvent(eventDetails) {
  
   tokenClient.callback = async (resp) => {
        if(resp.error!== undefined){
            throw resp;
        }
        await scheduleEvent(eventDetails);
        if(gapi.client.getToken() === null){
            tokenClient.requestAccessToken({ prompt: "consent"});
        }else{
            tokenClient.requestAccessToken({ prompt: ""});
        }
   };
  }

function scheduleEvent(eventDetails){
const event={
    summary:"Google I/0 2015",
    location: "Tunis",
    description:"aa",
    start:{
    dateTime: eventDetails.startTime,
    timeZone:"tunis/tunis",
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    attendees: [{email :eventDetails.email}],
    remiders:{
        userDefault: false,
        overrides:[
        {method : "email" , minutes: 24*60},
        {method : "popup", minutes: 10},
    ],
    },
};
const request = gapi.client.calender.events.insert({
    calenderId:"primary",
    resource: event,
});
request.execute(function(event){
    console.info("Event created:" + event.htmlLink);
})
}