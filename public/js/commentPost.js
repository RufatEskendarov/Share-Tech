const post_id = window.location.pathname.split("/")[2];

const commentPostHandler = async (event) => {
  event.preventDefault();

  const content = document.getElementById("comment-content").value;

  console.log(content);
  if (content) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#comment-form")
  .addEventListener("submit", commentPostHandler);
