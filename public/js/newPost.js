const newPostHandler = async function (event) {
  event.preventDefault();

  const title = document.getElementById("new-title").value;
  const content = document.getElementById("new-content").value;

  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

document.getElementById("new-post").addEventListener("submit", newPostHandler);
