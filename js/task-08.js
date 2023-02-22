const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let email = event.currentTarget.elements.email.value;
  let password = event.currentTarget.elements.password.value;

  const inputData = {
    email,
    password,
  };

  if (email.value === "" || password.value === "") {
    return alert("All fields should be filled in!");
  }

  console.log(inputData);

  // formRef.id = "form";

  console.log(formRef.id);
  formRef.setAttribute("id", "form");
  document.getElementById("form").reset();
  // event.currentTarget.reset();
}
