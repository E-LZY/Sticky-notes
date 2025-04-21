var notesContainer = document.getElementsByClassName("notes-container")[0];
var newNoteContainer = document.getElementsByClassName("new-note-container")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var trashIcon = document.getElementById("trash-icon");
var colorPicker = document.getElementById("colorPicker");

var i = 0;
var currentColor = "#ffffff";

xIcon.addEventListener("click", () => {
  typeNote();
  document.getElementById("note-text").innerHTML = "";
});

checkIcon.addEventListener("click", () => {
  var noteText = document.getElementById("note-text").innerHTML;
  console.log(noteText);

  if (noteText != "") {
    createNote(noteText);
  }
  document.getElementById("note-text").innerHTML = "";
  typeNote();
});

// trashIcon.addEventListener("mouseover", () => {
//   // typeNote();
//   // document.getElementById("note-text").innerHTML = "";
//   getSelectedText();
// });

function typeNote() {
  if (newNoteContainer.style.display == "none") {
    newNoteContainer.style.display = "block";
  } else {
    newNoteContainer.style.display = "none";
  }
}

function createNote(msg) {
  // var noteTextDiv = document.getElementById("note-text");

  var node0 = document.createElement("div");
  var node1 = document.createElement("p");
  node1.classList.add("note");
  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = currentColor;
  node1.innerHTML = msg;
  node0.appendChild(node1);
  node0.addEventListener("click", () => {
    openNoted();
  });

  notesContainer.insertAdjacentElement("beforeend", node0);
  ResetColor();
}

function margin() {
  var randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

  return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate() {
  var randomRotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(0deg)",
  ];

  return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}

// function color() {
//   var randomColor = [
//     "#c1ffe3",
//     "#ffade8",
//     "#3dc9ff",
//     "#dfef12",
//     "#bca3e6",
//     "#ebd328",
//   ];

//   if (i > randomColor.length - 1) i = 0;
//   return randomColor[i++];
// }

let selectedText = "";
let rangeAt = "";

document.addEventListener("selectionchange", () => {
  if (window.getSelection().toString() != "") {
    selectedText = window.getSelection().toString();
    rangeAt = window.getSelection().getRangeAt(0);
    console.log("Selected text:", selectedText);
  }
});

function getSelectedStyle(e) {
  if (selectedText) {
    console.log(selectedText);

    let s = document.createElement("span");
    s.classList.add(e);
    s.innerHTML = selectedText;
    rangeAt.deleteContents();
    rangeAt.insertNode(s);
  }
}

function ChangeColor() {
  console.log("clicked");
  colorPicker.click();

  colorPicker.addEventListener("input", () => {
    const newNoteBox = document.getElementById("note-text");
    currentColor = colorPicker.value;
    newNoteBox.style.backgroundColor = currentColor;
  });
}

function ResetColor() {
  colorPicker.value = "#ffffff";
  const newNoteBox = document.getElementById("note-text");
  currentColor = colorPicker.value;
  newNoteBox.style.backgroundColor = currentColor;
}

