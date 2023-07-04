window.onload = function () {
    let translate = 0;

    const translations = {
        0:{
            "translate_button": "en.png",
            "h21": "Old but gold!",
            "p11": "Every month we hold a poll where we decide upon our 5 feature films and 1 short film that get a screening!",
            "p12": "As the end of the month approaches, don't forget to send us on our email what films would you like to see in this section!",



            "h22": "Premiere!",
            "p21": "Doua lozuri 2 is here!",
            "p22": "The premiere is on 15th April, at 20:30. Your fave characters from the prequel will be here for you!",
            "p23": "You can ask them any questions cross your mind, whether they are related to the process of making the film or you just want to know things about their lives!",


            "recommended_text": "Don't forget!",
            "p31": "If you enjoyed our screenings, you can leave a review on our site!",

            "note": "For more info and reviews about the movies, we gladly recommend letterboxd!"
        },
        1:{
            "translate_button": "ro.png",
            "h21": "Vechi, dar bun!",
            "p11": "In fiecare luna tinem un sondaj in urma caruia decidem cele 5 filme si 1 un scurtmetraj pe care le vom difuza!",
            "p12": "Cum sfarsitul lunii se apropie, nu uitati sa ne trimiteti pe email ce filme v-ar placea sa vedeti in aceasta sectiune!",



            "h22": "Premiera!",
            "p21": "Doua lozuri 2 este aici!",
            "p22": "Premiera este pe 15 Aprilie, ora 20:30. Personajele tale preferate din primul film vor veni aici pentru tine!",
            "p23": "Ii poti intreba orice iti trece prin minte, indiferent daca sunt legate de procesul de creatie a filmului sau doar iti doresti sa afli lucruri despre vietile lor!",


            "recommended_text": "Nu uitati!",
            "p31": "Daca v-au placut difuzarile noastre, puteti lasa o recenzie pe site-ul nostru!",

            "note": "Pentru mai multe informatii si recenzii despre filme, recomandam cu caldura letterboxd!"

        }

    };







    const translate_button = document.getElementById("translate_button");
    translate_button.addEventListener("click", function (event) {
        event.preventDefault();
        translate = 1 - translate;

        translate_button.src = translations[translate]["translate_button"];

        const h21 = document.getElementById("h21");
        const p11 = document.getElementById("p11");
        const p12 = document.getElementById("p12");

        const h22 = document.getElementById("h22");
        const p21 = document.getElementById("p21");
        const p22 = document.getElementById("p22");
        const p23 = document.getElementById("p23");

        const recommended_text = document.getElementById("recommended_text");
        const p31 = document.getElementById("p31");

        const note = document.getElementsByClassName("note");

        //translate_button.textContent = translations[translate]["translate_button"];
        h21.textContent = translations[translate]["h21"];
        p11.textContent = translations[translate]["p11"];
        p12.textContent = translations[translate]["p12"];

        h22.textContent = translations[translate]["h22"];
        p21.textContent = translations[translate]["p21"];
        p22.textContent = translations[translate]["p22"];
        p23.textContent = translations[translate]["p23"];

        recommended_text.textContent = translations[translate]["recommended_text"];
        p31.textContent = translations[translate]["p31"];

        note[0].textContent = translations[translate]["note"];
    });

}