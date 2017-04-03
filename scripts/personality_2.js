setPersonality(); // DEBUG


function setPersonality() {
    var traitList = [''], callList = [''], inverseList = [true];
    switch (getRandomNumber(1, 5)) {
        case 1: // Openness Dominant
            callList = ['o', 'c', 'e', 'a', 'n'];
            inverseList = [inverse(), true, false, inverse(), inverse()];
            break;
        case 2: // Conscientiousness Dominant
            callList = ['c', 'o', 'r', 'r', 'r'];
            traitList = ['e', 'a', 'n'];
            inverseList = [inverse(), true, inverse(), inverse(), inverse()];
            break;
        case 3: // Extraversion Dominant
            callList = ['e', 'n', 'o', 'a', 'c'];
            inverseList = [inverse(), true, false, inverse(), inverse()];
            break;
        case 4: // Agreeableness Dominant
            callList = ['a', 'n', 'r', 'r', 'r'];
            traitList = ['o', 'c', 'e'];
            inverseList = [inverse(), false, inverse(), inverse(), inverse()];
            break;
        case 5: // Neuroticism Dominant
            callList = ['n', 'a', 'e', 'c', 'o'];
            inverseList = [inverse(), false, true, inverse(), inverse()];
            break;
        default:
            console.log('ERROR: case in setPersonality out of bounds');
            break;
    }
    for(var i = 0; i < 5; i++) { // for every trait container
        traitList = getTrait(i, callList[i], traitList, inverseList[i]);
        console.log(callList[i]);
    }
}


function getTrait(container, trait, traitList, inversed) {
    var aspectList = [], traitName, random;
    switch (trait) {
        case 'o':
            // Openness
            aspectList = ["Imagination", "Artistic Interest", "Emotionality", "Adventurousness", "Intellect", "Liberalism"];
            traitName = "Openness";
            break;
        case 'c':
            // Conscientiousness
            aspectList = ["Self-Efficacy", "Orderliness", "Dutifulness", "Achievement-Striving", "Self-Discipline", "Cautiousness"];
            traitName = "Conscientiousness";
            break;
        case 'e':
            // Extraversion
            aspectList = ["Friendliness", "Gregariousness", "Assertiveness", "Activity-Level", "Excitement-Seeking", "Cheerfulness"];
            traitName = "Extraversion";
            break;
        case 'a':
            // Agreeableness
            aspectList = ["Trust", "Morality", "Altruism", "Cooperation", "Modesty", "Sympathy"];
            traitName = "Agreeableness";
            break;
        case 'n':
            // Neuroticism
            aspectList = ["Anxiety", "Anger", "Depression", "Self-Consciousness", "Immoderation", "Vulnerability"];
            traitName = "Neuroticism";
            break;
        case 'r':
            // Randomly Assigned
            random = getRandomNumber(0, traitList.length-1);
            traitList = getTrait(container, traitList[random], traitList, inverse());
            traitList.splice(random, 1);
            // randomly choose and then call getTrait from getTrait with new parameters and adjust traitList
            break;
        default:
            console.log("ERROR: trait in getTrait out of normal bounds");
            break;
    }

    if (trait !== 'r') {
        var score = traitScore(container, inversed);
        document.getElementById(container + "Trait").innerHTML = textualScore(score) + traitName;
        for (var i = 0; i < 6; i++) { // for each aspect line
            document.getElementById(container + "Aspect" + i).innerHTML = textualScore(aspectCalculation(score)) + aspectList[i];
        }
    }

    return traitList;
}


function traitScore(container, inversed) {
    var min, max;

    if (container === 0) {
        // Dominant Trait
        min = 2;
        max = 3;
    }
    else if (container === 1 || container === 2) {
        // Accent Trait
        min = 1;
        max = 2;
    }
    else if (container === 3 || container === 4) {
        // Minor Trait
        min = 0;
        max = 1;
    }
    else {
        console.log("ERROR: traitStrength outside normal bounds");
    }

    var score = getRandomNumber(min, max);
    if (inversed === true) {
        score = score*-1;
    }
    return score;
}


function textualScore(score) {
    var text;

    switch (score) {
        case 3:
            text = "Very High ";
            break;
        case 2:
            text = "High ";
            break;
        case 1:
            text = "Slightly High ";
            break;
        case 0:
            text = "Moderate ";
            break;
        case -1:
            text = "Slightly Low ";
            break;
        case -2:
            text = "Low ";
            break;
        case -3:
            text = "Very Low ";
            break;
        default:
            console.log("ERROR: score in textualScore outside normal bounds\n");
            break;
    }
    return text;
}


function aspectCalculation(traitScore) {
    var random = getRandomNumber(1, 100), score, inversed;

    if (random < 7 ) {
        score = -3;
    }
    else if (random < 19) {
        score = -2;
    }
    else if (random < 37) {
        score = -1;
    }
    else if (random < 64) {
        score = 0;
    }
    else if (random < 83) {
        score = 1;
    }
    else if (random < 95) {
        score = 2;
    }
    else {
        score = 3;
    }

    inversed = inverse();
    if (inversed === true) {
        score = traitScore - score;
    }
    else {
        score = traitScore + score;
    }

    if (score > 3) {
        score = 3;
    }
    if (score < -3) {
        score = -3;
    }

    return score;
}


function inverse() {
    var inversed;
    if (Math.random() < 0.5) {
        inversed = true;
    }
    else {
        inversed = false;
    }
    return inversed;
}


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
