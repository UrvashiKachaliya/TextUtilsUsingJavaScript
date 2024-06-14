let text = document.getElementById("inputs");
let charactercount = document.getElementById("character");
let wordcount = document.getElementById("word");
let previewText = document.getElementById("pre");

const upperCase = () => {
  text.value = text.value.toUpperCase();
  previewText.innerText = text.value;
};
const lowerCase = () => {
  text.value = text.value.toLowerCase();
  previewText.innerText = text.value;
};
const Clear = () => {
  text.value = "";
  previewText.innerText = "";
};

const copyToClipBoard = () => {
  text.select();
  navigator.clipboard.writeText(text.value);
  alert(text.value);
};
const removeExtraSpace = () => {
  let result = text.value.replace(/\s+/g, " ");
  text.value = result;
  previewText.innerText = text.value;
};
const characterCount = () => {
  charactercount.innerText = `Number of Characters:${text.value.length}`;
  previewText.innerText = text.value;
};
const wordCount = () => {
  let result = text.value.split(" ");
  wordcount.innerText = `Number of Words:${result.length}`;
  previewText.innerText = text.value;
};

const reverseText = () => {
  text.value = text.value.split("").reverse().join("");
};

const updatepreview = () => {
  previewText.innerText = text.value;
};

text.addEventListener("input", (e) => {
  previewText.innerText = e.target.value;
});

const speechListener = () => {
  var message = new SpeechSynthesisUtterance(text.value);
  window.speechSynthesis.speak(message);
};
