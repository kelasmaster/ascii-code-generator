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
    alert("ASCII codes copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
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
