const addBtn = document.querySelector(".button");
const textArea = document.querySelector(".textarea");
const notes = document.querySelector(".notes");
const colorInput = document.querySelector("#color");
const sizeInput = document.querySelector("#size");

colorInput.addEventListener("change", () => {
  textArea.style.color = colorInput.value;
});

sizeInput.addEventListener("change", () => {
  textArea.style.fontSize = sizeInput.value + "px";
});

addBtn.addEventListener("click", (e) => {
  if (textArea.value === "") {
    alert("Please Enter a note.");
    box.remove();
  }

  const box = document.createElement("div");
  box.className = "notes-box";
  notes.appendChild(box);

  const text = document.createElement("p");
  box.appendChild(text);
  text.innerHTML = textArea.value;
  text.style.color = colorInput.value;
  text.style.fontSize = sizeInput.value + "px";
  if (textArea.value === text.innerHTML) {
    textArea.value = "";
  }

  const closeBtn = document.createElement("Button");
  box.appendChild(closeBtn);
  closeBtn.innerHTML = "X";
  closeBtn.addEventListener("click", () => {
    box.remove();
  });
});
