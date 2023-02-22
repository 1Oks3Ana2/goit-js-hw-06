const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields should be filled in!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.value.reset();
}
