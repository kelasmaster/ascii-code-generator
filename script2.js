// script.js

// Function to convert a string to formatted ASCII codes (&#<code>;)
function convertToAscii(input) {
  // Split input into paragraphs (based on newlines)
  const paragraphs = input.split("\n");

  // Process each paragraph
  const asciiParagraphs = paragraphs.map(paragraph => {
    // Split paragraph into words
    const words = paragraph.split(" ");

    // Convert each word to ASCII codes without spaces between letters
    const asciiWords = words.map(word => {
      return word.split("").map(char => `&#${char.charCodeAt(0)};`).join("");
    });

    // Join words with &#32; for spaces
    return asciiWords.join("&#32;");
  });

  // Join paragraphs with <br/>
  return asciiParagraphs.join("<br/>");
}

// Function to escape HTML entities so they display as plain text
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;")
             .replace(/</g, "<")
             .replace(/>/g, ">")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
}

// Function to update the ASCII output
function updateAsciiOutput() {
  const input = document.getElementById("sentenceInput").value;
  const asciiOutput = document.getElementById("asciiOutput");

  // Convert input to ASCII and escape HTML entities
  const asciiText = convertToAscii(input);
  asciiOutput.textContent = escapeHtml(asciiText); // Use textContent to avoid rendering
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
