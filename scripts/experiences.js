console.log(setExperiencesText(getRandomNumber(0, 5)));

function setExperiencesText(age) {
    var text;
    switch (age) {
        case 0:
            text = "Baby: " + numberOfEvents(getRandomNumber(1, 2));
            break;
        case 1:
            text = "Baby: " + numberOfEvents(getRandomNumber(1, 2));
            text = text + "\n\nChild: " + numberOfEvents(getRandomNumber(1, 3));
            break;
        case 2:
            text = "Baby: " + numberOfEvents(getRandomNumber(1, 2));
            text = text + "\n\nChild: " + numberOfEvents(getRandomNumber(1, 3));
            text = text + "\n\nTeen: " + numberOfEvents(getRandomNumber(1, 3));
            break;
        case 3:
            text = "Baby: " + numberOfEvents(getRandomNumber(1, 2));
            text = text + "\n\nChild: " + numberOfEvents(getRandomNumber(1, 3));
            text = text + "\n\nTeen: " + numberOfEvents(getRandomNumber(1, 3));
            text = text + "\n\nYoung Adult: " + numberOfEvents(getRandomNumber(2, 4));
            break;
        case 4:
            text = "Baby: " + numberOfEvents(getRandomNumber(1, 2));
            text = text + "\n\nChild: " + numberOfEvents(getRandomNumber(1, 3));
            text = text + "\n\nTeen: " + numberOfEvents(getRandomNumber(1, 3));
            text = text + "\n\nYoung Adult: " + numberOfEvents(getRandomNumber(2, 4));
            text = text + "\n\nAdult: " + numberOfEvents(getRandomNumber(2, 4));
            break;
        case 5:
            text = "Baby: " + numberOfEvents(getRandomNumber(1, 2));
            text = text + "\n\nChild: " + numberOfEvents(getRandomNumber(1, 3));
            text = text + "\n\nTeen: " + numberOfEvents(getRandomNumber(1, 3));
            text = text + "\n\nYoung Adult: " + numberOfEvents(getRandomNumber(2, 4));
            text = text + "\n\nAdult: " + numberOfEvents(getRandomNumber(2, 4));
            text = text + "\n\nElder: " + numberOfEvents(getRandomNumber(1, 3));
            break;
        default:
            console.log("ERROR: variable age in setExperiencesText out of bounds");
            break;
    }
    return text;
}

function numberOfEvents(numEvents) {
    var events = "";
    for (var x = 0; x < numEvents; x++) { // out of bounds?
        events = events + "\n" + event();
    }
    return events;
}


function event() {
    var num = getRandomNumber(0, 59), events = "Change in ";
    switch (num) {
    case 0:
        events = events + "Wealth, Expenses, or Property";
        break;
    case 1:
        events = events + "Status, Power, or Acclaim";
        break;
    case 2:
        events = events + "Relationship or Social Circle";
        break;
    case 3:
        events = events + "Ability, Skill, or Knowledge";
        break;
    case 4:
        events = events + "Physical, Mental, or Emotional Health";
        break;
    case 5:
        events = events + "Emotional Outlook or State";
        break;
    case 6:
        events = events + "Outlook on Life";
        break;
    case 7:
        events = events + "Skill or Knowledge";
        break;
    case 8:
        events = events + "Belief or Outlook on Life";
        break;
    case 9:
        events = events + "Morals";
        break;
    case 10:
        events = events + "Political or Cultural Climate";
        break;
    case 11:
        events = events + "Peace";
        break;
    case 12:
        events = events + "Freedom or Independence";
        break;
    case 13:
        events = events + "Location";
        break;
    case 14:
        events = events + "Certainty";
        break;
    case 15:
        events = events + "Independence";
        break;
    case 16:
        events = events + "Success";
        break;
    case 17:
        events = events + "Stability or Certainty";
        break;
    case 18:
        events = events + "Community";
        break;
    case 19:
        events = "Union or Partnership";
        break;
    case 20:
        events = "Sacrifice";
        break;
    case 21:
        events = "Give, Serve, or Help";
        break;
    case 22:
        events = "Test";
        break;
    case 23:
        events = "Danger, Threat, or Risk";
        break;
    case 24:
        events = "Battle, Struggle, or Fight";
        break;
    case 25:
        events = "Celebration";
        break;
    case 26:
        events = "Something New";
        break;
    case 27:
        events = "News or Information";
        break;
    case 28:
        events = "Message or Communication";
        break;
    case 29:
        events = "Runaway, Leave Behind, Retreat, Hide, or Flee";
        break;
    case 30:
        events = "Persecution or Oppression";
        break;
    case 31:
        events = "Isolation or Alone";
        break;
    case 32:
        events = "Disappointed, Unreliable, or Let-Down";
        break;
    case 33:
        events = "Ruin or Brokenness";
        break;
    case 34:
        events = events + "Focus, Dream, or Goal";
        break;
    case 35:
        events = "Love, Bond, or Affection";
        break;
    case 36:
        events = "No-Win Situation or Powerlessness";
        break;
    case 37:
        events = "Transformation or Growth";
        break;
    case 38:
        events = "Deception or Trickery";
        break;
    case 39:
        events = "Mystery, Paranormal, or The Unexplained";
        break;
    case 40:
        events = "End or Completion";
        break;
    case 41:
        events = "Grace or Mercy";
        break;
    case 42:
        events = "Recovery, Repair, Make Whole";
        break;
    case 43:
        events = "Return, History, or Past";
        break;
    case 44:
        events = "Temptation or Persuasion";
        break;
    case 45:
        events = events + "Loyalty";
        break;
    case 46:
        events = "Reap What You Sow or Karma";
        break;
    case 47:
        events = "Empowered";
        break;
    case 48:
        events = "Work, Labor, or Effort";
        break;
    case 49:
        events = "Invention or Creation";
        break;
    case 50:
        events = "Preparation or Making Ready";
        break;
    case 51:
        events = "Success, Fruition, or Accomplishment";
        break;
    case 52:
        events = "Defend or Stand Up For";
        break;
    case 53:
        events = "Morally Dubious or Dishonorable";
        break;
    case 54:
        events = "Surprised or Blind-Sided";
        break;
    case 55:
        events = "Conquest or Domination";
        break;
    case 56:
        events = "Unfairness";
        break;
    case 57:
        events = "Waiting or Delay";
        break;
    case 58:
        events = events + "Direction or Course";
        break;
    case 59:
        events = "Accident or Misfortune";
        break;
    default:
        console.log("ERROR: variable event outside normal bounds");
        break;
    }
    return events;
}


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}