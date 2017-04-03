// Consider how to make it more efficient: lots of repeating code --> make a function?

console.log(getDominantTrait()); // DEBUG
function getDominantTrait() {
    switch (getRandomNumber(1, 5)) {
        case 1:
            document.getElementById("dominantTrait").innerHTML = "Openness";
            opennessDominant();
            break;
        case 2:
            document.getElementById("dominantTrait").innerHTML = "Conscientiousness";
            conscientiousnessDominant();
            break;
        case 3:
            document.getElementById("dominantTrait").innerHTML = "Extraversion";
            extraversionDominant();
            break;
        case 4:
            document.getElementById("dominantTrait").innerHTML = "Agreeableness";
            agreeablenessDominant();
            break;
        case 5:
            document.getElementById("dominantTrait").innerHTML = "Neuroticism";
            neuroticismDominant();
            break;
        default:
            console.log('ERROR: domTrait');
            break;
    }
}

function opennessDominant() {
    var text, score = traitScore(0, inverse());

    text = "Dominant Trait: " + textualScore(score) + "Openness\n";
    text = text + aspects(0, score);

    score = traitScore(1, true);
    text = text + "Accent Trait: " + textualScore(score) + "Conscientiousness\n";
    text = text + aspects(1, score);

    score = traitScore(1, false);
    text = text + "Accent Trait: " + textualScore(score) + "Extraversion\n";
    text = text + aspects(2, score);

    score = traitScore(2, inverse());
    text = text + "Minor Trait: " + textualScore(score) + "Agreeableness\n";
    text = text + aspects(3, score);

    score = traitScore(2, inverse());
    text = text + "Minor Trait: " + textualScore(score) + "Neuroticism\n";
    text = text + aspects(4, score);

    return text;
}


function conscientiousnessDominant() {
    var text, score = traitScore(0, inverse());

    text = "Dominant Trait: " + textualScore(score) + "Conscientiousness\n";
    text = text + aspects(1, score);

    score = traitScore(1, true);
    text = text + "Accent Trait: " + textualScore(score) + "Openness\n";
    text = text + aspects(0, score);

    var randomTraitNum = getRandomNumber(0, 2);
    switch (randomTraitNum) {
        case 0:
            score = traitScore(1, inverse());
            text = text + "Accent Trait: " + textualScore(score) + "Extraversion\n";
            text = text + aspects(2, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Agreeableness\n";
            text = text + aspects(3, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Neuroticism\n";
            text = text + aspects(4, score);
            break;
        case 1:
            score = traitScore(1, inverse());
            text = text + "Accent Trait: " + textualScore(score) + "Agreeableness\n";
            text = text + aspects(3, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Extraversion\n";
            text = text + aspects(2, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Neuroticism\n";
            text = text + aspects(4, score);
            break;
        case 2:
            score = traitScore(1, inverse());
            text = text + "Accent Trait: " + textualScore(score) + "Neuroticism\n";
            text = text + aspects(4, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Extraversion\n";
            text = text + aspects(2, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Agreeableness\n";
            text = text + aspects(3, score);
            break;
        default:
            console.log("ERROR: conscientiousnessDominant switch out of bounds");
            break;
    }

    return text;
}


function extraversionDominant() {
    var text, score = traitScore(0, inverse());

    text = "Dominant Trait: " + textualScore(score) + "Extraversion\n";
    text = text + aspects(2, score);

    score = traitScore(1, true);
    text = text + "Accent Trait: " + textualScore(score) + "Neuroticism\n";
    text = text + aspects(4, score);

    score = traitScore(1, false);
    text = text + "Accent Trait: " + textualScore(score) + "Openness\n";
    text = text + aspects(0, score);

    score = traitScore(2, inverse());
    text = text + "Minor Trait: " + textualScore(score) + "Agreeableness\n";
    text = text + aspects(3, score);

    score = traitScore(2, inverse());
    text = text + "Minor Trait: " + textualScore(score) + "Conscientiousness\n";
    text = text + aspects(1, score);

    return text;
}


function agreeablenessDominant() {
    var text, score = traitScore(0, inverse());

    text = "Dominant Trait: " + textualScore(score) + "Agreeableness\n";
    text = text + aspects(3, score);

    score = traitScore(1, false);
    text = text + "Accent Trait: " + textualScore(score) + "Neuroticism\n";
    text = text + aspects(4, score);

    var randomTraitNum = getRandomNumber(0, 2);
    switch (randomTraitNum) {
        case 0:
            score = traitScore(1, inverse());
            text = text + "Accent Trait: " + textualScore(score) + "Openness\n";
            text = text + aspects(0, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Conscientiousness\n";
            text = text + aspects(1, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Extraversion\n";
            text = text + aspects(2, score);
            break;
        case 1:
            score = traitScore(1, inverse());
            text = text + "Accent Trait: " + textualScore(score) + "Conscientiousness\n";
            text = text + aspects(1, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Openness\n";
            text = text + aspects(0, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Extraversion\n";
            text = text + aspects(2, score);
            break;
        case 2:
            score = traitScore(1, inverse());
            text = text + "Accent Trait: " + textualScore(score) + "Extraversion\n";
            text = text + aspects(2, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Openness\n";
            text = text + aspects(0, score);

            score = traitScore(2, inverse());
            text = text + "Minor Trait: " + textualScore(score) + "Conscientiousness\n";
            text = text + aspects(1, score);
            break;
        default:
            console.log("ERROR: agreeablenessDominant switch out of bounds");
    }

    return text;
}


function neuroticismDominant() {
    var text, score = traitScore(0, inverse());

    text = "Dominant Trait: " + textualScore(score) + "Neuroticism\n";
    text = text + aspects(4, score);

    score = traitScore(1, false);
    text = text + "Accent Trait: " + textualScore(score) + "Agreeableness\n";
    text = text + aspects(3, score);

    score = traitScore(1, true);
    text = text + "Accent Trait: " + textualScore(score) + "Extraversion\n";
    text = text + aspects(2, score);

    score = traitScore(2, inverse());
    text = text + "Minor Trait: " + textualScore(score) + "Conscientiousness\n";
    text = text + aspects(1, score);

    score = traitScore(2, inverse());
    text = text + "Minor Trait: " + textualScore(score) + "Openness\n";
    text = text + aspects(0, score);

    return text;
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

function aspects(trait, score) {
    var aspects;

    switch (trait) {
        case 0:
            aspects = "\t" + textualScore(aspectCalculation(score)) + "Imagination\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Artistic Interest\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Emotionality\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Adventurousness\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Intellect\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Liberalism\n";
            break;
        case 1:
            aspects = "\t" + textualScore(aspectCalculation(score)) + "Self-Efficacy\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Orderliness\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Dutifulness\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Achievement-Striving\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Self-Discipline\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Cautiousness\n";
            break;
        case 2:
            aspects = "\t" + textualScore(aspectCalculation(score)) + "Friendliness\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Gregariousness\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Assertiveness\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Activity-Level\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Excitement-Seeking\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Cheerfulness\n";
            break;
        case 3:
            aspects = "\t" + textualScore(aspectCalculation(score)) + "Trust\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Morality\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Altruism\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Cooperation\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Modesty\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Sympathy\n";
            break;
        case 4:
            aspects = "\t" + textualScore(aspectCalculation(score)) + "Anxiety\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Anger\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Depression\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Self-Consciousness\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Immoderation\n";
            aspects = aspects + "\t" + textualScore(aspectCalculation(score)) + "Vulnerability\n";
            break;
        default:
            aspects = "ERROR: variable aspects outside normal bounds";
    }
    return aspects;
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

    //  // more realistic version follows
    // if (random < 4 ) {
    //     score = -3;
    // }
    // else if (random < 14) {
    //     score = -2;
    // }
    // else if (random < 34) {
    //     score = -1;
    // }
    // else if (random < 68) {
    //     score = 0;
    // }
    // else if (random < 88) {
    //     score = 1;
    // }
    // else if (random < 98) {
    //     score = 2;
    // }
    // else {
    //     score = 3;
    // }

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


function traitScore(traitStrength, inversed) {
    var min, max;

    if (traitStrength === 0) {
        // Dominant Trait
        min = 2;
        max = 3;
    }
    else if (traitStrength === 1) {
        // Accent Trait
        min = 1;
        max = 2;
    }
    else if (traitStrength === 2) {
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


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// function traitScore(traitStrength, inverse) {
//     var bound, numOfNum;
//     switch (traitStrength) {
//         case 1:
//             bound = 2;
//             numOfNum = 2;
//             break;
//         case 2:
//             bound = 1;
//             numOfNum = 2;
//             break;
//         case 3:
//             bound = 0;
//             numOfNum = 2;
//             break;
//         default:
//             bound = 10;
//             numOfNum = 20;
//             break;
//     }
//     // is score defined...?
//     score = bound + getRandomNumber(1, numOfNum);

//     if (inverse == true) {
//         score = score*-1;
//     }
//     var text = textualScore(score);
//     return text;
// }
