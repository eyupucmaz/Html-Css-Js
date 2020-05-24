function animetedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;
    });
  });

  function validateUser(user) {
    if (user.value.length < 6) {
      console.log("Not enough characters");
      error("rgb(189,87,87)");
    } else {
      error("rgb(86, 189, 129)");
    }
  }

  function error(color) {
    document.body.style.backgroundColor = color;
  }
}

animetedForm();
