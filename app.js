function toggleElementDisplay(parentID, childID) {
    var parent = document.getElementById(parentID);
    var child = document.getElementById(childID);
    if (parent) {
        parent.addEventListener('click', () => {
            if (child) {

                var display = window.getComputedStyle(child).getPropertyValue("display");

                if (display === "none") {
                    parent.innerHTML = "-";
                    child.style.display = "flex";
                } else {
                    parent.innerHTML = "+";
                    child.style.display = "none";
                }
            } else {
                console.error("Element with ID '" + childID + "' not found.");
            }
        })
    }
    else {
        console.error("Element with ID '" + parentID + "' not found.");
    }
}


console.log("hw");

toggleElementDisplay("indianText", "indianContent");
toggleElementDisplay("chineseText", "chineseContent");
toggleElementDisplay("americanText", "americanContent");
toggleElementDisplay("italianText", "italianContent");
toggleElementDisplay("bevragesText", "bevragesContent");