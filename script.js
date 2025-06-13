/*FAQ Js code*/
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.style.maxHeight;

    document.querySelectorAll(".faq-answer").forEach((a) => {
      a.style.maxHeight = null;
      a.style.paddingTop = 0;
      a.style.paddingBottom = 0;
    });

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.paddingTop = "1rem";
      answer.style.paddingBottom = "1rem";
    }
  });
});
