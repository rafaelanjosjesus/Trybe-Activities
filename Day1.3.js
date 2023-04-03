let your_score = 20;
console.log(your_score);

if(your_score >= 80) {
    console.log("Congratulations, you are part of the approved group!")
} else if (your_score < 80 && your_score >= 60) {
    console.log("You are on our waiting list.")
} else if (your_score < 60) {
    console.log("Infelizmente você reprovou")
}