const logOutHandler = async function () {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    alert("logged out!");
  } else {
    alert("Failed to log out");
  }
};

document.getElementById("log-out").addEventListener("click", logOutHandler);
