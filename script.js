// script.js

document.getElementById('obfuscatorForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the original link from the input field
  const originalLink = document.getElementById('originalLink').value.trim();

  // Validate the input
  if (!isValidUrl(originalLink)) {
    alert('Please enter a valid URL.');
    return;
  }

  // Obfuscate the link
  const obfuscatedLink = obfuscateLink(originalLink);

  // Display the obfuscated link
  const obfuscatedLinkField = document.getElementById('obfuscatedLink');
  obfuscatedLinkField.value = obfuscatedLink;

  // Enable copy functionality
  document.getElementById('copyButton').addEventListener('click', function () {
    obfuscatedLinkField.select();
    document.execCommand('copy');
    alert('Obfuscated link copied to clipboard!');
  });
});

// Function to validate a URL
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

// Function to obfuscate the link
function obfuscateLink(link) {
  // Use a data URI with JavaScript redirection
  return `javascript:void(window.location.href='${encodeURIComponent(link)}')`;
}
