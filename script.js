// Utility function
function pad(unit) {
    return `${unit < 10 ? "0" : ""}${unit}`;
}

function displayTimeAndDate() {
    let timeDate = new Date();
    
    // Extract date 
    let mmm  = timeDate.toLocaleString("default", { month: "short" })
    let dd   = timeDate.getDate();
    let yyyy = timeDate.getFullYear();

    // Update date
    let date = `${mmm} ${pad(dd)}, ${yyyy}`;
    document.getElementById("date").innerHTML = date;

    // Extract time
    let hh = timeDate.getHours();
    let mm = timeDate.getMinutes();
    let ss = timeDate.getSeconds();
    let period = hh < 12 ? "am" : "pm";  
    
    // Convert hours according to the 12-hour system
    hh = hh > 12 ? hh - 12 : hh;

    // Update time
    let time = `${pad(hh)}:${pad(mm)}:${pad(ss)} ${period}`;
    document.getElementById("time").innerHTML = time;
}

// Function call
setInterval(displayTimeAndDate, 1);
