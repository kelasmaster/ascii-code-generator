// script.js

// Function to convert a string to formatted ASCII codes (&#<code>;)
function convertToAscii(input) {
  return input.split("").map(char => `&#${char.charCodeAt(0)};`).join(" ");
}

// Function to update the ASCII output
function updateAsciiOutput() {
  const input = document.getElementById("sentenceInput").value;
  const asciiOutput = document.getElementById("asciiOutput");
  asciiOutput.textContent = convertToAscii(input);
}

// Function to copy ASCII output to clipboard
function copyToClipboard() {
  const asciiOutput = document.getElementById("asciiOutput");
  navigator.clipboard.writeText(asciiOutput.textContent).then(() => {
    alert("&#65; &#83; &#67; &#73; &#73; &#32; &#99; &#111; &#100; &#101; &#115; &#32; &#99; &#111; &#112; &#105; &#101; &#100; &#32; &#116; &#111; &#32; &#99; &#108; &#105; &#112; &#98; &#111; &#97; &#114; &#100;!");
  }).catch(err => {
    console.error("&#70; &#97; &#105; &#108; &#101; &#100; &#32; &#116; &#111; &#32; &#99; &#111; &#112; &#121; &#32; &#116; &#101; &#120; &#116;: ", err);
  });
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("sentenceInput");
  const copyButton = document.getElementById("copyButton");

  // Update ASCII output on input change
  inputField.addEventListener("input", updateAsciiOutput);

  // Copy ASCII output on button click
  copyButton.addEventListener("click", copyToClipboard);
});
