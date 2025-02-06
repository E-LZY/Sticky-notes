var notesContainer = document.getElementsByClassName("notes-container")[0];
var newNoteContainer = document.getElementsByClassName("new-note-container")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");

var i = 0;

xIcon.addEventListener("click", () => {
  typeNote();
});

checkIcon.addEventListener("click", () => {
    var noteText = document.getElementById("note-text").value;
    if(noteText!="")
    {
        createNote(noteText);
    }
    document.getElementById("note-text").value = "";
    typeNote();
});

function typeNote() {
  if (newNoteContainer.style.display == "none") {
    newNoteContainer.style.display = "block";
  } else {
    newNoteContainer.style.display = "none";
  }
}

function createNote(msg) {
//   var noteText = document.getElementById("note-text").value;

  var node0 = document.createElement("div");
  var node1 = document.createElement("p");
  node1.classList.add("note");
  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();
  node1.innerHTML = msg;
  node0.appendChild(node1);

  notesContainer.insertAdjacentElement("beforeend", node0);
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
    "rotate(-10deg)",
  ];

  return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}

function color() {
  var randomColor = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "bc83e6",
    "#ebb328",
  ];

  if (i > randomColor - 1) i = 0;
  return randomColor[i++];
}

// echo "# Sticky-notes" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/E-LZY/Sticky-notes.git
// git push -u origin main
