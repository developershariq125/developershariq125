const plus = document.querySelectorAll(".plus");
const cross = document.querySelectorAll(".cross");
const para = document.querySelectorAll(".para");

// Function to toggle the visibility of content
function toggleContent(index) {
  para[index].classList.toggle("hidden");
  cross[index].classList.toggle("hidden");
  plus[index].classList.toggle("hidden");
}

// Add event listeners to plus and cross icons
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event propagation to parent elements
    toggleContent(i);
  });

  cross[i].addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event propagation to parent elements
    toggleContent(i);
  });
}

// Add event listener to the question headings (h5)
const questions = document.querySelectorAll(".question h4");
questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    toggleContent(index);
  });
});
