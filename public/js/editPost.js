const postId = window.location.pathname.split("/")[2];

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
    alert("Failed to update your post");
  }
  document.location.replace("/dashboard");
};

const deletePostHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};
// WHY ONE BUTTON IS SUBMIT AND THE OTHER IS CLICK?
document
  .querySelector("#post-edit")
  .addEventListener("submit", editPostHandler);
document
  .querySelector("#btn-post-delete")
  .addEventListener("click", deletePostHandler);
