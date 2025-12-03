document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("viewToggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    document.body.classList.toggle("compact-view");
    if (document.body.classList.contains("compact-view")) {
      btn.textContent = "Switch to Classic View";
    } else {
      btn.textContent = "Switch to Compact View";
    }
  });
});
