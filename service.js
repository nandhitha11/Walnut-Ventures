// faq
document.addEventListener("DOMContentLoaded", function () {
  const accButtons = document.querySelectorAll(".acc-question");

  accButtons.forEach(button => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const answer = button.nextElementSibling;

      // Collapse all
      accButtons.forEach(btn => {
        btn.setAttribute("aria-expanded", "false");
        btn.nextElementSibling.style.maxHeight = null;
      });

      // Expand clicked one
      if (!isExpanded) {
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
//enquiry
  
  function openPopup() {
    document.getElementById("enquiryPopup").style.display = "flex";
    document.body.style.overflow = "hidden"; // optional: lock scroll
  }

  function closePopup() {
    document.getElementById("enquiryPopup").style.display = "none";
    document.body.style.overflow = "auto";
  }
