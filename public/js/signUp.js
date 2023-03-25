const signUpHandler = async function (event) {
  event.preventDefault();

  const login = document.getElementById("login").value.trim();
  const password = document.getElementById("s-pass").value.trim();
  const email = document.getElementById("s-email").value.trim();
  const headTitle = document.getElementById("head-title");
  console.log(login);
  console.log(email);
  console.log(password);
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      email,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    headTitle.innerText = "Your Dashboard";
  } else {
    alert("Failed to sign up");
  }
};

document.querySelector("#sign-up").addEventListener("submit", signUpHandler);
