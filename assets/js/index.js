var owl = $(".owl-carousel-one");
owl.owlCarousel({
  items: 5,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 2000,
  // autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    410: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
var owl2 = $(".owl-carousel-two");
owl2.owlCarousel({
  items: 2,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 2000,
  // autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 2,
    },
  },
});
var body = document.body;
var youtube = document.getElementById("youtube");
function open_youtube() {
  youtube.classList.remove("d-none");
  youtube.classList.add("d-flex");
  body.style.overflow = "hidden";
}
function close_youtube() {
  youtube.classList.remove("d-flex");
  youtube.classList.add("d-none");
  body.style.cssText = "";
}
function go_to_top() {
  document.getElementById("header").scrollIntoView({ behavior: "smooth" });
}

var accordion = document.getElementById("accordion");
var accordion_item = accordion.getElementsByClassName("accordion-item");
for (var i = 0; i < accordion_item.length; i++) {
  accordion_item[i].addEventListener("click", function () {
    var current = accordion.getElementsByClassName("active");
    current[0].getElementsByTagName("p")[0].classList.remove("d-block");
    current[0].getElementsByTagName("i")[0].classList.remove("fa-minus");
    current[0].getElementsByTagName("i")[0].classList.add("fa-plus");
    current[0].classList.remove("active");
    this.classList.add("active");
    this.getElementsByTagName("p")[0].classList.add("d-block");
    this.getElementsByTagName("i")[0].classList.remove("fa-plus");
    this.getElementsByTagName("i")[0].classList.add("fa-minus");
  });
}

var facbook_link = document.querySelectorAll(".fa-facebook-f");
for (var i = 0; i < facbook_link.length; i++) {
  facbook_link[i].addEventListener("click", function () {
    window.open("https://www.facebook.com/", "_blank");
  });
}

var twitter_link = document.querySelectorAll(".fa-twitter");
for (var i = 0; i < twitter_link.length; i++) {
  twitter_link[i].addEventListener("click", function () {
    window.open("https://twitter.com", "_blank");
  });
}

var linkin_link = document.querySelectorAll(".fa-linkedin-in");
for (var i = 0; i < linkin_link.length; i++) {
  linkin_link[i].addEventListener("click", function () {
    window.open("https://www.linkedin.com", "_blank");
  });
}

var youtube_link = document.querySelectorAll(".fa-youtube ");
for (var i = 0; i < youtube_link.length; i++) {
  youtube_link[i].addEventListener("click", function () {
    window.open("https://www.youtube.com", "_blank");
  });
}

var twitch_link = document.querySelectorAll(".fa-twitch");
for (var i = 0; i < twitch_link.length; i++) {
  twitch_link[i].addEventListener("click", function () {
    window.open("https://www.twitch.tv", "_blank");
  });
}

var instagram_link = document.querySelectorAll(".fa-instagram");
for (var i = 0; i < instagram_link.length; i++) {
  instagram_link[i].addEventListener("click", function () {
    window.open("https://www.instagram.com/", "_blank");
  });
}

var get_subscribe = document.querySelectorAll(".get-subscribe");
var subscribe_dialog = document.querySelector(".subscribe-dialog");
var colse_subscribe_dialog = document.querySelector(".subscribe-dialog i");
for (var i = 0; i < get_subscribe.length; i++) {
  get_subscribe[i].addEventListener("click", function () {
    subscribe_dialog.classList.remove("d-none");
    subscribe_dialog.classList.add("d-flex");
    body.style.cssText = `
    padding-right:10px;
    overflow:hidden;
    `;
  });
}

// subscribe_dialog.addEventListener('click', function(){
//   document.querySelector('.subscribe-dialog').classList.add('d-none');
//   body.style.cssText=''
// });
colse_subscribe_dialog.addEventListener("click", function () {
  document.querySelector(".subscribe-dialog").classList.add("d-none");
  body.style.cssText = "";
});

var server = document.querySelectorAll(".server ");
for (var i = 0; i < server.length; i++) {
  server[i].addEventListener("click", function () {
    window.location.href = `service.html?ser=${
      this.querySelector("h3").innerHTML
    }`;
  });
}

var comName = document.querySelector("#comName");
var email = document.querySelector("#email");
var NumPhone = document.querySelector("#NumPhone");
var request_btn = document.querySelector("#request-btn");

comName.addEventListener("keyup", function () {
  var pattern = /^[A-Z][a-zA-Z0-9 ]{3,20}$/;
  checkInputs(pattern, this);
});
email.addEventListener("keyup", function () {
  var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  checkInputs(pattern, this);
});
NumPhone.addEventListener("keyup", function () {
  var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  checkInputs(pattern, this);
});
request_btn.addEventListener("click", function (e) {
  e.preventDefault();
});
function checkInputs(pattern, input) {
  var inputText = input.parentElement;
  var inputFocusIcon = inputText.querySelector(
    ".request-a-quote .input-text input:focus + i "
  );
  var validationText = inputText.querySelector(".input-text span");
  if (pattern.test(input.value)) {
    input.classList.add("valid");
    inputFocusIcon.style.cssText = `
    color:var(--main-color);
    `;
    validationText.style.cssText = `
    display: none;
    `;
  } else {
    input.classList.remove("valid");
    inputFocusIcon.style.cssText = `
    color:red;
    `;
    validationText.style.cssText = `
    display: block;
    `;
  }
  checkValidAllInputs();
}
function checkValidAllInputs() {
  var inputs = document.querySelectorAll(".input-text input");
  var inputs_valid = document.querySelectorAll(".input-text .valid");
  if (inputs.length == inputs_valid.length) {
    request_btn.removeAttribute("disabled");
  } else {
    request_btn.setAttribute("disabled", "disabled");
  }
}
