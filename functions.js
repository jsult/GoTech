const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const mail = document.querySelector("#mail");
const problem = document.querySelector("#problem");
const message = document.querySelector("#message");

const submit = document.querySelector(".submit_button");

const menu = document.querySelector(".menu");
const bar = document.querySelector(".top_links");

let open = false;

submit.addEventListener("click", show);
menu.addEventListener("click", openMenu);

function show() {
  let userfname = fname.value;
  let userlname = lname.value;
  let usermail = mail.value;
  let userproblem = problem.value;
  let usermessage = message.value;

  let showMessage =
    "First name: " +
    userfname +
    "\n" +
    "Last Name: " +
    userlname +
    "\n" +
    "Email: " +
    usermail +
    "\n" +
    "Problem: " +
    userproblem +
    "\n" +
    "Message: " +
    usermessage;

  alert(showMessage);
}

function openMenu() {
  open = !open;
  if (open) {
    window.addEventListener('scroll', noScroll);
    bar.style.display = "unset";
  } else {
    window.removeEventListener('scroll', noScroll);
    bar.style.display = "none";
  }
}

function noScroll() {
    window.scrollTo(0, 0);
  }
