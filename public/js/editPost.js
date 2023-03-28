const postId = window.location.pathname.split("/")[2];

const deletePostHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

const editPostHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById("edit-title").value;
  const content = document.getElementById("edit-content").value;

  const response = await fetch(`/api/post/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
  }
  document.location.replace("/dashboard");
};

document
  .getElementById("post-edit")
  .addEventListener("submit", editPostHandler);

document
  .getElementById("btn-post-delete")
  .addEventListener("click", deletePostHandler);
