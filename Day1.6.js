let candidate =  "approved"
    switch (candidate) {
        case "approved":
            console.log("Baraban, you are in the group of approved people!");
                break;

        case "list":
            console.log("You are on our waiting list.");
                break;

        case "disapproved":
            console.log("Unfortunately, you failed.");
                break; 

        default:
            console.log("Incorrect information.")         
}%                               