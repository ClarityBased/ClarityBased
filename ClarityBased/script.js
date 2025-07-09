document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const contactModal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");

  contactBtn.addEventListener("click", function () {
    contactModal.style.display = "flex";
  });

  closeModal.addEventListener("click", function () {
    contactModal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === contactModal) {
      contactModal.style.display = "none";
    }
  });
});

