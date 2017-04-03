document.getElementById("dominant").innerHTML = "";


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getGender() {
    switch (getRandomNumber(1, 2)) {
        case 1:
            var gender = "Male";
            break;
        case 2:
            var gender = "Female";
            break;
        default:
            console.log('ERROR: gender')
            break;
    }
    return gender;
}


function getAge() {
    switch (getRandomNumber(1, 6)) {
        case 1:
            var age = "Baby";
            break;
        case 2:
            var age = "Child";
            break;
        case 3:
            var age = "Teen";
            break;
        case 4:
            var age = "Young Adult";
            break;
        case 5:
            var age = "Adult";
            break;
        case 6:
            var age = "Elder";
            break;
        default:
            console.log('ERROR: age')
            break;
    }
    return age;
}


function getSkin() {
    switch (getRandomNumber(1, 3)) {
        case 1:
            var skin = "Light";
            break;
        case 2:
            var skin = "Medium";
            break;
        case 3:
            var skin = "Dark";
            break;
        default:
            console.log('ERROR: skin')
            break;
    }
    skin = skin + "-Skinned";
    return skin;
}


function getEyeColor() {
    switch (getRandomNumber(1, 5)) {
        case 1:
            var eyeColor = "Blue";
            break;
        case 2:
            var eyeColor = "Green";
            break;
        case 3:
            var eyeColor = "Brown";
            break;
        case 4:
            var eyeColor = "Black";;
            break;
        case 5:
            var eyeColor = "Grey";
            break;
        default:
            console.log('ERROR: eyeColor');
            break;
    }
    eyeColor = eyeColor + "-Eyed";
    return eyeColor;
}


function getHairColor() {
    switch (getRandomNumber(1, 4)) {
        case 1:
            var hairColor = "Brunette";
            break;
        case 2:
            var hairColor = "Blonde";
            break;
        case 3:
            var hairColor = "Black-Haired";
            break;
        case 4:
            var hairColor = "Red-Haired";
            break;
        default:
            console.log('ERROR: hairColor');
            break;
    }
    return hairColor;
}


function getHeight() {
    switch (getRandomNumber(1, 3)) {
        case 1:
            var height = "Short";
            break;
        case 2:
            var height = "Average Height";
            break;
        case 3:
            var height = "Tall";
            break;
        default:
            console.log('ERROR: height')
            break;
    }
    return height;
}


function getWeight() {
    switch (getRandomNumber(1, 3)) {
        case 1:
            var weight = "Thin";
            break;
        case 2:
            var weight = "Average Weight";
            break;
        case 3:
            var weight = "Heavy";
            break;
        default:
            console.log('ERROR: weight')
            break;
    }
    return weight;
}

console.log(getGender() + " " + getAge() + "\n");
console.log(getSkin() + "\n");
console.log(getEyeColor() + ", " + getHairColor() + "\n");
console.log(getHeight() + " and " + getWeight());
