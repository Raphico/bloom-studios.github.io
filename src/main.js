document.querySelector(".menu-btn").addEventListener("click", () => {
  if (document.querySelector(".side-bar").classList.contains("hidden"))
  {
    document.querySelector(".side-bar").classList.remove("hidden");
  }
  else
  {
    document.querySelector(".side-bar").classList.add("hidden");
  }
});

document.querySelector(".remove-side-bar").addEventListener("click", () => {
  document.querySelector(".side-bar").classList.add("hidden");
})