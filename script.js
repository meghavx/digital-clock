function padded(item) {
    return `${item < 10 ? "0" : ""}${item}`;
}

function displayTime() {
    let timeDate = new Date();
    
    // Extract date 
    let mmm = timeDate.toLocaleString("default", { month: "short" })
    let dd = timeDate.getDate();
    let yyyy = timeDate.getFullYear();

    // Construct and update date
    let date = `${mmm} ${padded(dd)}, ${yyyy}`;
    document.getElementById("date").innerHTML = date;

    // Extract time
    let hh = timeDate.getHours();
    let mm = timeDate.getMinutes();
    let ss = timeDate.getSeconds();
    let session = hh < 12 ? "am" : "pm";  
    
    // Convert hours according to the 12-hour system
    hh = hh > 12 ? hh - 12 : hh;

    // Construct and update time
    let time = `${padded(hh)}:${padded(mm)}:${padded(ss)} ${session}`;
    document.getElementById("time").innerHTML = time;
}

setInterval(displayTime, 1);
