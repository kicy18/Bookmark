const section1 = document.querySelector("#one");
const section2 = document.querySelector("#two");
const section3 = document.querySelector("#third");

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const hr1 = document.querySelector(".heading-1 hr");
const hr2 = document.querySelector(".heading-2 hr");
const hr3 = document.querySelector(".heading-3 hr");



// Function to handle section visibility
function showSection(activeSection , hr) {
  // Hide all sections
  section1.style.display = "none";
  section2.style.display = "none";
  section3.style.display = "none";
  hr1.style.borderColor = "rgb(176, 176, 176)";
  hr2.style.borderColor = "rgb(176, 176, 176)";
  hr3.style.borderColor = "rgb(176, 176, 176)";
  hr1.style.borderWidth = "2px";
  hr2.style.borderWidth = "2px";
  hr3.style.borderWidth = "2px";
  



  // Show the selected section
  activeSection.style.display = "flex";
  hr.style.borderColor = "rgba(255, 73, 73, 1)";
  hr.style.borderWidth = "3px";
  

}

// Event listeners for headings
heading1.addEventListener("click", () => {
    console.log("clicked");
  showSection(section1 , hr1);
});

heading2.addEventListener("click", () => {
  showSection(section2 , hr2);
});

heading3.addEventListener("click", () => {
  showSection(section3 , hr3);
});

// Initial state: show the first section
showSection(section1 , hr1);

function showans(ans){
    a.style.display = "block";
}


document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.q');

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});

