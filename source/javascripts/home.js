var buttons = document.querySelectorAll('.want-in-button');
var superMessage = document.getElementById('super-message');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        superMessage.classList.add("show");

        setTimeout(function() {
            superMessage.classList.remove("show");
        }, 1000)

        this.innerHTML = "You're in!";
        this.classList.add("in");
    });
}
