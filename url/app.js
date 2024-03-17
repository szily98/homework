document.addEventListener("DOMContentLoaded", function () {
  const changeContentBtn = document.getElementById("changeContentBtn");
  const contentContainer = document.getElementById("contentContainer");

  changeContentBtn.addEventListener("click", function () {
    const newContent = document.createElement("p");
    newContent.textContent = "Congrats! We can be friends!";

    contentContainer.innerHTML = "";
    contentContainer.appendChild(newContent);
  });
});
