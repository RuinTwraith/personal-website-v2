/* -------------------- form validation & submission ---------------- */

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOt8CktPjjFXB3mE6p78ER6-SNtk2WmqI",
  authDomain: "dibbendu-koley-v2.firebaseapp.com",
  databaseURL: "https://dibbendu-koley-v2-default-rtdb.firebaseio.com",
  projectId: "dibbendu-koley-v2",
  storageBucket: "dibbendu-koley-v2.appspot.com",
  messagingSenderId: "1001132178209",
  appId: "1:1001132178209:web:e2dc13c7e219d261059c60",
  measurementId: "G-16H0QW2WY1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//reference messages collection
var messageRef = firebase.database().ref("messages");

document
  .getElementById("contact-form-body")
  .addEventListener("submit", submitForm);

// submit form
function submitForm(e) {
  e.preventDefault();

  //get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  //save message
  saveMessage(name, email, message);

  //show alert
  document.querySelector(".alert").style.display = "block";

  //hide alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //clear form
  document.getElementById("contact-form-body").reset();
}

//funtion to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}

/* -------------------- Sticky navbar ---------------- */

var scrollpos = window.scrollY;
var nav = document.getElementById("mynav");
var nav_height = nav.offsetHeight;

var add_class_on_scroll = () => nav.classList.add("nav-dropshadow");
var remove_class_on_scroll = () => nav.classList.remove("nav-dropshadow");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= nav_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

/*-------------------- shortening the logo -------------------- */
/* console.log("Change");
function logo_change() {
  var w = parseInt(window.innerWidth);
  if (w <= 375) {
    console.log(w);
    document.getElementById("dk-logo").innerHTML = "DK";
  }
}
// if window resize call responsive function
$(window).resize(function (e) {
  logo_change();
  console.log("Change");
});
// call responsive function on default :)
$(document).ready(function (e) {
  logo_change();
  console.log("Change");
}); */

/*-------------------- smooth scrolling -------------------- */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// $(document).on('click', 'a[href^="#"]', function (event) {
//   event.preventDefault();

//   $('html, body').animate({
//       scrollTop: $($.attr(this, 'href')).offset().top
//   }, 500);
// });

/*-------------------- Scroll for 3d artwork-------------------- */

function scrollWin(a) {
  document.querySelector(".design-img").scrollBy(a, 0);
}
