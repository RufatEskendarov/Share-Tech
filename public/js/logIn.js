const logInHandler = async function (event) {
  event.preventDefault();

  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: userEmail.value,
      password: userPassword.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to login");
  }
};

document.querySelector(".login-form").addEventListener("submit", logInHandler);
