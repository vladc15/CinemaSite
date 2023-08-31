window.onload = function () {

    const form = document.getElementById("comment_form");
    const thanks = document.getElementById("thanks");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        thanks.textContent = "Thank you for your feedback!";
        thanks.style.color = "darkorange";
        thanks.style.fontSize = "1.2em";
        thanks.style.fontWeight = "bold";
        thanks.style.display = "inline-block";


        setTimeout( () => {
            thanks.remove();
            form.submit();
        }, 3000);

    });

}