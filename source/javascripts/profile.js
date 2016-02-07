var buttons = document.querySelectorAll('.request-button');
var superMessage = document.getElementById('super-message');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    event.preventDefault();

    superMessage.classList.add("show");

    setTimeout(function() {
        superMessage.classList.remove("show");
    }, 1000)

    this.innerHTML = "Request sent!";
    this.classList.add("on");
  });
}



var messageButton = document.getElementById("user-message-button");

messageButton.addEventListener('click', function(event) {
  event.preventDefault();

  document.body.classList.add("messages-open");
});


var closeButton = document.getElementById("close-button");

closeButton.addEventListener('click', function(event) {
  event.preventDefault();

  document.body.classList.remove("messages-open");
});
