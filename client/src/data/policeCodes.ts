import { PoliceCode } from "@/lib/types";

export const policeCodes: PoliceCode[] = [
  {
    id: 1,
    code: "10-1",
    title: "Reception Poor",
    description: "Radio reception is poor or unclear.",
    example: "Dispatch: All units be advised, Officer Johnson is 10-1 in the north county area.",
    category: "10-codes"
  },
  {
    id: 2,
    code: "10-2",
    title: "Reception Good",
    description: "Radio reception is good and clear.",
    example: "Officer: Dispatch, how do you copy? Dispatch: 10-2, loud and clear.",
    category: "10-codes"
  },
  {
    id: 3,
    code: "10-3",
    title: "Stop Transmitting",
    description: "Stop transmitting on the radio, maintain radio silence.",
    example: "Dispatch: All units 10-3 for emergency traffic only. Officer down at Vinewood Boulevard.",
    category: "10-codes"
  },
  {
    id: 4,
    code: "10-4",
    title: "Acknowledgment",
    description: "Message received and understood.",
    example: "Dispatch: Unit 5, proceed to 115 Magellan Avenue for a noise complaint. Officer: 10-4, en route.",
    category: "10-codes"
  },
  {
    id: 5,
    code: "10-5",
    title: "Relay Message",
    description: "Relay this message to another person or unit.",
    example: "Officer: Dispatch, 10-5 to Officer Davis that suspect vehicle is heading southbound on Route 1.",
    category: "10-codes"
  },
  {
    id: 6,
    code: "10-6",
    title: "Busy",
    description: "Unit is busy and unavailable for calls.",
    example: "Officer: Dispatch, I'll be 10-6 at Davis Sheriff Station with paperwork for approximately 30 minutes.",
    category: "10-codes"
  },
  {
    id: 7,
    code: "10-7",
    title: "Out of Service",
    description: "Officer is out of service or unavailable.",
    example: "Officer: Dispatch, I'm 10-7 for lunch break at Del Perro Pier.",
    category: "10-codes"
  },
  {
    id: 8,
    code: "10-8",
    title: "In Service",
    description: "Officer is back in service and available for calls.",
    example: "Officer: Dispatch, I'm 10-8 and returning to patrol in the Vinewood area.",
    category: "10-codes"
  },
  {
    id: 9,
    code: "10-9",
    title: "Repeat Message",
    description: "Please repeat last transmission.",
    example: "Officer: Dispatch, 10-9, there was radio interference.",
    category: "10-codes"
  },
  {
    id: 10,
    code: "10-10",
    title: "Fight in Progress",
    description: "Indicates a fight or physical altercation is occurring.",
    example: "Dispatch: All available units, 10-10 at Legion Square, multiple subjects involved.",
    category: "10-codes"
  },
  {
    id: 11,
    code: "10-11",
    title: "Animal Problem",
    description: "Problem involving an animal.",
    example: "Dispatch: Unit 3, respond to a 10-11 on Senora Freeway, reports of a mountain lion near the highway.",
    category: "10-codes"
  },
  {
    id: 12,
    code: "10-12",
    title: "Stand By",
    description: "Wait or stand by.",
    example: "Dispatch: Unit 7, 10-12 at your location, backup is en route.",
    category: "10-codes"
  },
  {
    id: 13,
    code: "10-13",
    title: "Weather/Road Conditions",
    description: "Report on weather or road conditions.",
    example: "Officer: Dispatch, 10-13, heavy fog on Great Ocean Highway, visibility less than 100 feet.",
    category: "10-codes"
  },
  {
    id: 14,
    code: "10-14",
    title: "Escort",
    description: "Providing an escort.",
    example: "Officer: Dispatch, I'll be 10-14 for the VIP convoy from LSIA to City Hall.",
    category: "10-codes"
  },
  {
    id: 15,
    code: "10-15",
    title: "Prisoner in Custody",
    description: "Officer has a suspect in custody.",
    example: "Officer: Dispatch, I'm 10-15 with one suspect, en route to Mission Row PD.",
    category: "10-codes"
  },
  {
    id: 16,
    code: "10-16",
    title: "Domestic Dispute",
    description: "Domestic violence or family disturbance.",
    example: "Dispatch: Unit 6, respond to a 10-16 at 124 Boulevard Del Perro, apartment 3B.",
    category: "10-codes"
  },
  {
    id: 17,
    code: "10-17",
    title: "Meet Complainant",
    description: "Meet with person who made a complaint.",
    example: "Officer: Dispatch, I'll be 10-17 with the reporting party at Pillbox Medical.",
    category: "10-codes"
  },
  {
    id: 18,
    code: "10-18",
    title: "Quickly",
    description: "Urgently, but without using lights or sirens.",
    example: "Dispatch: Unit 2, proceed 10-18 to backup Officer Johnson at the traffic stop on Route 68.",
    category: "10-codes"
  },
  {
    id: 19,
    code: "10-19",
    title: "Return to Station",
    description: "Return to the police station.",
    example: "Dispatch: All units in the area, 10-19 for shift briefing.",
    category: "10-codes"
  },
  {
    id: 20,
    code: "10-20",
    title: "Location",
    description: "What is your location?",
    example: "Dispatch: Unit 4, 10-20? Officer: I'm at the intersection of Strawberry Avenue and Olympic Freeway.",
    category: "10-codes"
  },
  {
    id: 21,
    code: "10-21",
    title: "Call by Phone",
    description: "Call the dispatcher or another person by phone.",
    example: "Dispatch: Officer Garcia, 10-21 the station when you get a chance.",
    category: "10-codes"
  },
  {
    id: 22,
    code: "10-22",
    title: "Disregard",
    description: "Disregard the last message or assignment.",
    example: "Dispatch: Unit 3, 10-22 that last call, the situation has been resolved.",
    category: "10-codes"
  },
  {
    id: 23,
    code: "10-23",
    title: "Arrived at Scene",
    description: "Officer has arrived at the location of the call.",
    example: "Officer: Dispatch, 10-23 at the reported burglary on Alta Street.",
    category: "10-codes"
  },
  {
    id: 24,
    code: "10-27",
    title: "Driver's License Check",
    description: "Running a check on a driver's license.",
    example: "Officer: Dispatch, 10-27 on a Robert Johnson, DOB 5/12/1985.",
    category: "10-codes"
  },
  {
    id: 25,
    code: "10-28",
    title: "Vehicle Registration Check",
    description: "Running a check on a vehicle registration.",
    example: "Officer: Dispatch, 10-28 on a black Obey Tailgater, plate 5ABC123.",
    category: "10-codes"
  },
  {
    id: 26,
    code: "10-29",
    title: "Check for Wanted",
    description: "Check if a person or vehicle is wanted.",
    example: "Officer: Dispatch, 10-29 on the driver and vehicle.",
    category: "10-codes"
  },
  {
    id: 27,
    code: "10-30",
    title: "Unauthorized Use of Radio",
    description: "Person is misusing the radio frequency.",
    example: "Dispatch: Be advised, we have a 10-30 on this channel. All units switch to tactical frequency 2.",
    category: "10-codes"
  },
  {
    id: 28,
    code: "10-31",
    title: "Crime in Progress",
    description: "A crime is currently in progress.",
    example: "Officer: Dispatch, I have a 10-31, armed robbery at the Fleeca Bank on Great Ocean Highway.",
    category: "10-codes"
  },
  {
    id: 29,
    code: "10-32",
    title: "Person with Gun",
    description: "Person is armed with a firearm.",
    example: "Dispatch: All units in the area, 10-32 reported at Legion Square, male suspect in a red jacket.",
    category: "10-codes"
  },
  {
    id: 30,
    code: "10-33",
    title: "Emergency",
    description: "Emergency situation, clear the radio for urgent traffic.",
    example: "Officer: 10-33! 10-33! Officer down at Paleto Bay Sheriff's Office! Need immediate assistance!",
    category: "10-codes"
  },
  {
    id: 31,
    code: "10-35",
    title: "Major Crime Alert",
    description: "Major crime has occurred, be on the lookout.",
    example: "Dispatch: All units, 10-35, armed bank robbery just occurred at Pacific Standard Bank downtown.",
    category: "10-codes"
  },
  {
    id: 32,
    code: "10-37",
    title: "Suspicious Vehicle",
    description: "Suspicious vehicle reported or observed.",
    example: "Officer: Dispatch, I'm investigating a 10-37 behind the Liquor Ace in Sandy Shores.",
    category: "10-codes"
  },
  {
    id: 33,
    code: "10-38",
    title: "Traffic Stop",
    description: "Officer is conducting a traffic stop.",
    example: "Officer: Dispatch, I'm 10-38 with a red Sultan on Route 68 near the gas station.",
    category: "10-codes"
  },
  {
    id: 34,
    code: "10-50",
    title: "Traffic Accident",
    description: "Vehicle accident.",
    example: "Officer: Dispatch, responding to a 10-50 at the intersection of Alta and Vinewood Boulevard.",
    category: "10-codes"
  },
  {
    id: 35,
    code: "10-51",
    title: "Request Tow Truck",
    description: "Need a tow truck at location.",
    example: "Officer: Dispatch, 10-51 for an abandoned vehicle blocking the right lane on Olympic Freeway.",
    category: "10-codes"
  },
  {
    id: 36,
    code: "10-52",
    title: "Request Ambulance",
    description: "Need an ambulance at location.",
    example: "Officer: Dispatch, 10-52 needed at the 10-50 on Grapeseed Main Street, one injured party.",
    category: "10-codes"
  },
  {
    id: 37,
    code: "10-53",
    title: "Road Blocked",
    description: "Road is blocked or impassable.",
    example: "Officer: Dispatch, 10-53 on Senora Freeway due to landslide. Requesting barricades.",
    category: "10-codes"
  },
  {
    id: 38,
    code: "10-54",
    title: "Livestock on Roadway",
    description: "Animals are on the road creating a hazard.",
    example: "Officer: Dispatch, 10-54 on Grapeseed Main Street, multiple cows from the nearby farm.",
    category: "10-codes"
  },
  {
    id: 39,
    code: "10-55",
    title: "Intoxicated Driver",
    description: "Suspected drunk driver.",
    example: "Officer: Dispatch, pursuing a possible 10-55 heading northbound on Route 1 from Chumash.",
    category: "10-codes"
  },
  {
    id: 40,
    code: "10-56",
    title: "Intoxicated Pedestrian",
    description: "Suspected drunk pedestrian.",
    example: "Officer: Dispatch, dealing with a 10-56 outside the Vanilla Unicorn club.",
    category: "10-codes"
  },
  {
    id: 41,
    code: "10-57",
    title: "Hit and Run",
    description: "Hit and run accident.",
    example: "Dispatch: Unit 2, respond to a 10-57 at Del Perro Plaza. Witness on scene with suspect description.",
    category: "10-codes"
  },
  {
    id: 42,
    code: "10-59",
    title: "Security Check",
    description: "Conducting a security check of premises.",
    example: "Officer: Dispatch, I'll be conducting a 10-59 at the Maze Bank tower.",
    category: "10-codes"
  },
  {
    id: 43,
    code: "10-60",
    title: "Suspicious Person",
    description: "Suspicious person reported or observed.",
    example: "Dispatch: Unit 8, respond to a 10-60 at Vespucci Beach, male subject peering into parked vehicles.",
    category: "10-codes"
  },
  {
    id: 44,
    code: "10-66",
    title: "Suspicious Person with Weapon",
    description: "Suspicious person potentially armed with a weapon.",
    example: "Dispatch: All units in the area, 10-66 at the Galileo Observatory, approach with caution.",
    category: "10-codes"
  },
  {
    id: 45,
    code: "10-70",
    title: "Fire Alarm",
    description: "Fire alarm activated.",
    example: "Dispatch: Units in downtown, 10-70 at the Mile High Club building. Fire department en route.",
    category: "10-codes"
  },
  {
    id: 46,
    code: "10-71",
    title: "Fire",
    description: "Active fire reported.",
    example: "Officer: Dispatch, 10-71 at the gas station on Route 68. Fire is spreading rapidly.",
    category: "10-codes"
  },
  {
    id: 47,
    code: "10-80",
    title: "Pursuit in Progress",
    description: "Officer is in vehicle pursuit.",
    example: "Officer: Dispatch, 10-80 with a black Zentorno heading eastbound on Del Perro Freeway.",
    category: "10-codes"
  },
  {
    id: 48,
    code: "10-99",
    title: "Officer Needs Help - Extreme Emergency",
    description: "Officer in danger, needs immediate assistance.",
    example: "Officer: 10-99! 10-99! Shots fired at my location! I'm pinned down behind my vehicle!",
    category: "10-codes"
  },
  {
    id: 49,
    code: "11-10",
    title: "Take a Report",
    description: "Respond to take a routine report.",
    example: "Dispatch: Unit 5, 11-10 for a vehicle break-in at the Rockford Hills Mall parking lot.",
    category: "11-codes"
  },
  {
    id: 50,
    code: "11-24",
    title: "Abandoned Vehicle",
    description: "Report of an abandoned vehicle.",
    example: "Officer: Dispatch, I'm out with an 11-24 on Palomino Avenue, appears to have been here several days.",
    category: "11-codes"
  },
  {
    id: 51,
    code: "11-41",
    title: "Ambulance Needed",
    description: "Request ambulance for medical emergency.",
    example: "Officer: Dispatch, 11-41 at the scene of the accident. One victim with serious injuries.",
    category: "11-codes"
  },
  {
    id: 52,
    code: "11-44",
    title: "Deceased Person",
    description: "Body found, person is deceased.",
    example: "Officer: Dispatch, confirming 11-44 at the scene. Coroner needed at my location.",
    category: "11-codes"
  },
  {
    id: 53,
    code: "11-48",
    title: "Provide Transportation",
    description: "Provide transportation for person.",
    example: "Dispatch: Unit 3, 11-48 for a stranded motorist at the North Chumash gas station to the nearest motel.",
    category: "11-codes"
  },
  {
    id: 54,
    code: "11-54",
    title: "Suicide Attempt",
    description: "Person attempting suicide.",
    example: "Dispatch: All available units, 11-54 on the Vinewood Sign. Subject threatening to jump.",
    category: "11-codes"
  },
  {
    id: 55,
    code: "11-79",
    title: "Accident with Injuries",
    description: "Traffic accident with people injured.",
    example: "Officer: Dispatch, responding to 11-79 on Senora Freeway. Multiple vehicles involved.",
    category: "11-codes"
  },
  {
    id: 56,
    code: "11-80",
    title: "Accident with Major Injuries",
    description: "Traffic accident with serious injuries.",
    example: "Dispatch: All units in the area, 11-80 on Interstate 5 near the military base. Air ambulance requested.",
    category: "11-codes"
  },
  {
    id: 57,
    code: "11-81",
    title: "Accident with No Injuries",
    description: "Traffic accident with no injuries.",
    example: "Officer: Dispatch, I'm on scene of an 11-81 at Eclipse Boulevard and Power Street.",
    category: "11-codes"
  },
  {
    id: 58,
    code: "11-83",
    title: "Accident with Unknown Injuries",
    description: "Traffic accident with unknown injury status.",
    example: "Dispatch: Unit 6, respond to an 11-83 on the Great Ocean Highway near the Hookies restaurant.",
    category: "11-codes"
  },
  {
    id: 59,
    code: "11-85",
    title: "Tow Truck Needed",
    description: "Request a tow truck to the scene.",
    example: "Officer: Dispatch, 11-85 for a disabled vehicle blocking traffic on Alta Street.",
    category: "11-codes"
  },
  {
    id: 60,
    code: "11-98",
    title: "Meet an Officer",
    description: "Request to meet with another officer.",
    example: "Officer: Dispatch, requesting 11-98 with the watch commander at Davis Sheriff Station.",
    category: "11-codes"
  },
  {
    id: 61,
    code: "Code 1",
    title: "Non-emergency Response",
    description: "Respond without using lights or sirens, no urgency.",
    example: "Dispatch: Unit 2, respond Code 1 to the noise complaint on Prosperity Street.",
    category: "response-codes"
  },
  {
    id: 62,
    code: "Code 2",
    title: "Urgent Response",
    description: "Respond quickly but without lights or sirens.",
    example: "Dispatch: Unit 7, proceed Code 2 to the suspicious person call at Mirror Park.",
    category: "response-codes"
  },
  {
    id: 63,
    code: "Code 3",
    title: "Emergency Response",
    description: "Respond immediately with lights and sirens.",
    example: "Dispatch: All available units, respond Code 3 to the armed robbery in progress at 24/7 supermarket in Sandy Shores.",
    category: "response-codes"
  },
  {
    id: 64,
    code: "Code 4",
    title: "Situation Under Control",
    description: "No further assistance needed, situation is handled.",
    example: "Officer: Dispatch, we're Code 4 at the domestic disturbance call. No further units required.",
    category: "response-codes"
  },
  {
    id: 65,
    code: "Code 5",
    title: "Stakeout",
    description: "Set up surveillance at location.",
    example: "Dispatch: Unit 9, establish Code 5 at the suspected drug house on Covenant Avenue.",
    category: "response-codes"
  },
  {
    id: 66,
    code: "Code 6",
    title: "Out at Investigation",
    description: "Officer is out of vehicle investigating.",
    example: "Officer: Dispatch, I'm Code 6 at the convenience store on Route 68 investigating a prior robbery.",
    category: "response-codes"
  },
  {
    id: 67,
    code: "Code 7",
    title: "Meal Break",
    description: "Officer is taking a meal break.",
    example: "Officer: Dispatch, requesting Code 7 at the Burger Shot on Vespucci Boulevard.",
    category: "response-codes"
  },
  {
    id: 68,
    code: "Code 10",
    title: "SWAT Team Required",
    description: "Situation requires SWAT team response.",
    example: "Officer: Dispatch, we have a barricaded suspect with hostages. Request Code 10 at the Fleeca Bank on Great Ocean Highway.",
    category: "response-codes"
  },
  {
    id: 69,
    code: "Code 100",
    title: "In Pursuit of Grand Theft Auto",
    description: "Officer is in pursuit of a stolen vehicle.",
    example: "Officer: Dispatch, I am Code 100 with a stolen Grotti Turismo heading northbound on Interstate 1.",
    category: "response-codes"
  },
  {
    id: 70,
    code: "187",
    title: "Homicide",
    description: "Murder or homicide.",
    example: "Dispatch: Unit 4, respond to a possible 187 at the Bayview Lodge motel, room 13.",
    category: "penal-codes"
  },
  {
    id: 71,
    code: "207",
    title: "Kidnapping",
    description: "Person has been kidnapped.",
    example: "Officer: Dispatch, witnesses reporting a 207 at the Del Perro Pier parking lot. Black van seen leaving the area.",
    category: "penal-codes"
  },
  {
    id: 72,
    code: "211",
    title: "Robbery",
    description: "Robbery in progress or has occurred.",
    example: "Dispatch: All units, 211 in progress at the Fleeca Bank on Route 68.",
    category: "penal-codes"
  },
  {
    id: 73,
    code: "217",
    title: "Assault with Intent to Murder",
    description: "Assault with the intent to commit murder.",
    example: "Officer: Dispatch, responding to a 217 at the Yellow Jack Inn. One victim with stab wounds.",
    category: "penal-codes"
  },
  {
    id: 74,
    code: "240",
    title: "Assault",
    description: "Assault on a person.",
    example: "Dispatch: Unit 8, respond to a 240 outside the Vanilla Unicorn club.",
    category: "penal-codes"
  },
  {
    id: 75,
    code: "242",
    title: "Battery",
    description: "Unlawful use of force or violence upon another person.",
    example: "Officer: Dispatch, I'm on scene of a 242 at the Maze Bank Arena. Security has the suspect detained.",
    category: "penal-codes"
  },
  {
    id: 76,
    code: "415",
    title: "Disturbance",
    description: "Public disturbance or fighting.",
    example: "Dispatch: Units in the area, respond to a 415 at Vespucci Beach, multiple subjects involved.",
    category: "penal-codes"
  },
  {
    id: 77,
    code: "417",
    title: "Person with a Weapon",
    description: "Person displaying or brandishing a weapon.",
    example: "Dispatch: All units, 417 reported at the Rockford Plaza. Male subject with a knife.",
    category: "penal-codes"
  },
  {
    id: 78,
    code: "459",
    title: "Burglary",
    description: "Breaking and entering with intent to commit theft or felony.",
    example: "Officer: Dispatch, responding to a 459 at the jewelry store on Portola Drive. Alarm is sounding.",
    category: "penal-codes"
  },
  {
    id: 79,
    code: "480",
    title: "Hit and Run Felony",
    description: "Hit and run accident with injuries.",
    example: "Dispatch: Unit 3, respond to a 480 at the intersection of Spanish Avenue and Ginger Street. Victim is being transported to Pillbox Medical.",
    category: "penal-codes"
  },
  {
    id: 80,
    code: "487",
    title: "Grand Theft",
    description: "Theft of property valued over $950.",
    example: "Officer: Dispatch, taking a report of a 487 at the Premium Deluxe Motorsport dealership. Vehicle stolen from the lot overnight.",
    category: "penal-codes"
  },
  {
    id: 81,
    code: "488",
    title: "Petty Theft",
    description: "Theft of property valued under $950.",
    example: "Dispatch: Unit 1, respond to a 488 at the 24/7 supermarket on Innocence Boulevard.",
    category: "penal-codes"
  },
  {
    id: 82,
    code: "502",
    title: "Driving Under the Influence",
    description: "Driving while intoxicated by alcohol or drugs.",
    example: "Officer: Dispatch, I have a 502 in custody after a traffic stop on West Eclipse Boulevard.",
    category: "penal-codes"
  },
  {
    id: 83,
    code: "503",
    title: "Auto Theft",
    description: "Vehicle has been stolen.",
    example: "Dispatch: Be on the lookout for a 503, black Ubermacht Oracle, license plate 83GHT549, last seen heading toward Vinewood.",
    category: "penal-codes"
  },
  {
    id: 84,
    code: "530",
    title: "Impersonating an Officer",
    description: "Person falsely representing themselves as law enforcement.",
    example: "Officer: Dispatch, I have a subject in custody for 530, was conducting traffic stops in a replica police vehicle.",
    category: "penal-codes"
  }
];
