const addModal = document.querySelector(".modal");
const contactForm = document.querySelector(".contact_element_cont");
const userInputs = contactForm.querySelectorAll("input");
const selectProblem = document.querySelector("select");
const userMessage = document.querySelector("textarea");

const modalContent = document.querySelector(".modal_content");
const background = document.getElementById("backdrop");

const submit = document.querySelector(".submit_button");

const menu = document.querySelector(".menu");
const bar = document.querySelector(".top_links");

let open = false;

submit.addEventListener("click", checkInput);
menu.addEventListener("click", openMenu);

function checkInput() {
  let validInput = true;

  for (let i = 0; i < userInputs.length; i++) {
    if (userInputs[i].value === "") {
      userInputs[i].classList.add("red_field");
      validInput = false;
    } else {
      userInputs[i].classList.remove("red_field");
    }
  }
  if (selectProblem.value === "") {
    selectProblem.classList.add("red_field");
    validInput = false;
  } else {
    selectProblem.classList.remove("red_field");
  }

  if (validInput) {
    show();
  }
}

function show() {
  let userfname = fname.value;
  let userlname = lname.value;
  let usermail = mail.value;
  let userproblem = problem.value;
  let usermessage = message.value;

  modalContent.innerHTML = `
  <div class="modal_content">
  <h2 id="centered_elem">Is this information correct?</h2>
  <p> First name: ${userfname} </p>
  <p> Last name: ${userlname} </p>
  <p> Email: ${usermail} </p>
  <p> Problem: ${userproblem} </p>
  <p> Message: ${usermessage} </p>
  </div>
  <div class="confirmation_buttons">
  <button type="button" class="confirm_button" id="cancel_button">Cancel</button>
  <button type="button" class="confirm_button" id="yes_button">Yes</button>
  </div>
  `;

  addModal.classList.add("visible");
  background.classList.add("visible");
  document.body.style.overflow = "hidden";

  const yes = document.getElementById("yes_button");
  const cancel = document.getElementById("cancel_button");

  yes.addEventListener("click", inputConfirmed);
  cancel.addEventListener("click", inputCanceled);
}

function inputConfirmed() {
  addModal.classList.remove("visible");
  background.classList.remove("visible");
  document.body.style.overflow = "auto";
  alert("Thank you!");
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
  selectProblem.value = "";
  userMessage.value = "";
}

function inputCanceled() {
  addModal.classList.remove("visible");
  background.classList.remove("visible");
  document.body.style.overflow = "auto";
}

function openMenu() {
  open = !open;
  if (open) {
    document.body.style.overflow = "hidden";
    bar.style.display = "unset";
  } else {
    document.body.style.overflow = "auto";
    bar.style.display = "none";
  }
}
