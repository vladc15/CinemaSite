function drawTable(nrows, ncols, selectedFilm) {
    const table = document.createElement("table");
    for (let i=0; i<nrows; i++) {

        const row = document.createElement("tr");
        for (let j=0; j<ncols; j++) {

            const col = document.createElement("td");
            col.style.border = "1px darkgray solid";
            if (selectedFilm !== "Choose a film")
                col.style.backgroundColor = localStorage.getItem(i*ncols + j + "" + selectedFilm);
            row.appendChild(col);
        }
        table.appendChild(row);
    }

    document.getElementById("booking_seats").appendChild(table);
}

function updateTable(nrows, ncols, selectedFilm) {

    const seats = document.querySelectorAll("td");

    for (let i=0; i<seats.length; i++) {
        seats[i].style.backgroundColor = localStorage.getItem(i + "" + selectedFilm);
    }
}

function clock() {
    const now = new Date();
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "darkorange";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.lineCap = "round";

    // Hour marks
    ctx.save();
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();

    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours() % 12;

    ctx.fillStyle = "black";

    // Write Hours
    ctx.save();
    ctx.rotate(
        (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
    );
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // Write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();

    // Write seconds
    ctx.save();
    ctx.rotate((sec * Math.PI) / 30);
    ctx.strokeStyle = "darkorange";
    ctx.fillStyle = "darkorange";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = "darkorange";
    ctx.arc(0, 0, 142, 0, Math.PI * 2, false);
    ctx.stroke();

    ctx.restore();


    window.requestAnimationFrame(clock);

}


window.onload = function () {

    const nrows = 9;
    const ncols = 16;
    drawTable(nrows, ncols, "Choose a film");
    


    const colors = ["darkorange", "aqua", "magenta", "white", "#00bc00", "crimson"];
    const booking_header = document.getElementById("booking_header");

    const changingInterval = setInterval( () => {
        booking_header.style.color = colors[Math.floor(Math.random() * colors.length)];
    }, 1000);
    setTimeout( () => {
        clearInterval(changingInterval);
        booking_header.style.color = "white";
    }, 15000);



    const seats = document.querySelectorAll("td");
    const fieldset = document.getElementById("booking_fieldset");

    let alertShown = false;
    fieldset.addEventListener("click", function () {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const film = document.getElementById("film");
        //const date = document.getElementById("date");
        //const hour = document.getElementById("hour");
        const button = document.getElementById("form_button");
        const options = document.querySelectorAll("option");

        if (!alertShown) {
            let nr = 0;
            for (let i=0; i<seats.length; i++) {
                const seatStyle = window.getComputedStyle(seats[i]);
                if (seatStyle.getPropertyValue("background-color") === 'rgb(0, 188, 0)') {
                    nr++;
                    //alert("112");
                }
            }
            alert("Remember to fill in the form! There are ".concat(String(nr), " seats left!"));
            alertShown = true;
        }

        if (name.style.backgroundColor === "darkorange") {
            name.style.backgroundColor = "aqua";
            email.style.backgroundColor = "aqua";
            phone.style.backgroundColor = "aqua";
            film.style.backgroundColor = "aqua";
            //date.style.backgroundColor = "aqua";
            //hour.style.backgroundColor = "aqua";
            button.style.backgroundColor = "aqua";
            for (let i=0; i<options.length; i++)
                options[i].style.backgroundColor = "aqua";
        }
        else {
            name.style.backgroundColor = "darkorange";
            email.style.backgroundColor = "darkorange";
            phone.style.backgroundColor = "darkorange";
            film.style.backgroundColor = "darkorange";
            //date.style.backgroundColor = "darkorange";
            //hour.style.backgroundColor = "darkorange";
            button.style.backgroundColor = "darkorange";
            for (let i=0; i<options.length; i++)
                options[i].style.backgroundColor = "darkorange";
        }

    });

    const inputs = document.querySelectorAll("input");
    for (let i=0; i<inputs.length; i++) {
        inputs[i].addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
    const select = document.getElementById("film");
    select.addEventListener("click", function (event) {
        event.stopPropagation();
    });
    const options = document.querySelectorAll("option");
    for (let i=0; i<options.length; i++) {
        options[i].addEventListener("click", function (event) {
            event.stopPropagation();
            //alert("local storage");
            //updateTable(nrows, ncols, options[i].value);
        });
    }
    const filmSelector = document.getElementById("film");
    filmSelector.addEventListener("change", function () {
        //alert("onchange????");
        //updateTable(nrows, ncols, filmSelector.value);
        //document.getElementById("booking_seats").innerHTML = "";
        //drawFilmTable(nrows, ncols, filmSelector.value);
        updateTable(nrows, ncols, filmSelector.value);
    });

    const button = document.getElementById("form_button");
    button.addEventListener("click", function (event) {
        event.stopPropagation();
    });


    for (let i = 0; i < seats.length; i++) {
        //alert("intra in for");
        seats[i].addEventListener("click", function () {
            const selectedFilm = document.getElementById("film").value;
            //alert("intra in listener");
            if (selectedFilm !== "Choose a film") {
                //alert("merge listener");

                if (seats[i].style.backgroundColor === "crimson")
                    seats[i].style.backgroundColor = "#00bc00";
                else if (seats[i].style.backgroundColor !== "darkgrey")
                    seats[i].style.backgroundColor = "crimson";
            }
            else
                alert("Please select a film!");
        });
    }

    window.requestAnimationFrame(clock);




    const form = document.getElementById("booking_form");
    //localStorage.clear();
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let okBooked = false;

        for (let i=0; i<seats.length; i++) {
            //const seatStyle = window.getComputedStyle(seats[i]);
            const selectedFilm = document.getElementById("film").value;
            if (seats[i].style.backgroundColor === "crimson") {
                localStorage.setItem(i + "" + selectedFilm, "darkgrey");
                //alert("storage");
                okBooked = true;
            }
            else
                localStorage.setItem(i + "" + selectedFilm, seats[i].style.backgroundColor);
        }
            /*if (seats[i].style.backgroundColor !== "#00bc00") {
                localStorage.setItem(i + "", "darkgrey");
                if (seats[i].style.backgroundColor === "crimson")
                    okBooked = true;
            }
            else
                localStorage.setItem(i + "", "#00bc00");*/
        if (!okBooked) {
            alert("You have to book at least one seat!");
            return;
        }
        else {
            alert("You have completed a booking! Thank you!");
            const selectedFilm = document.getElementById("film").value;
            updateTable(nrows, ncols, selectedFilm);
        }
        //document.getElementById("booking_seats").innerHTML = "";

        event.currentTarget.submit();

    });

    //drawTable(nrows, ncols);
}