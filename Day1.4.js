let currentHour = 5;
let message;

if (currentHour >= 22){
    console.log(message = "We shouldn't eat anything, it's time to sleep!");
} else if (currentHour >= 18 && currentHour < 22){
    console.log(message = "Night food, let's have dinner :D");
} else if (currentHour >= 14 && currentHour < 18){
    console.log(message = "Shall we make a cake for afternoon coffee?");
} else if (currentHour >= 11 && currentHour < 14){
    console.log(message = "Lunch time!!!")
} else if (currentHour >= 4 && currentHour < 11){
    console.log("Yamii, smell of freshly brewed coffee")
}