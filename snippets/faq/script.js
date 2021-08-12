//CODE FOR SINGLE TOGGLE
// for (const faqItem of document.querySelectorAll(".faq__question")) {
//   faqItem.addEventListener("click", (e) => {
//     const hasClass =
//       e.currentTarget.parentNode.classList.contains("faq__show-answer");

//       //if it doesn't have the class when we click, it means another element has it, so remove it from the others
//     if (!hasClass) {
//       for (const el of document.querySelectorAll(".faq__show-answer")) {
//         el.classList.remove("faq__show-answer");
//       }
//     }
//     //toggle the class on parent element('.faq__item')
//     e.currentTarget.parentNode.classList.toggle("faq__show-answer");
//   });
// }

// CODE FOR MULTIPLE TOGGLEs
for (const faqItem of document.querySelectorAll(".faq__question")) {
  faqItem.addEventListener("click", (e) =>
    e.currentTarget
      .parentNode.classList.toggle("faq__show-answer")
  );
}
