function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openAndDownload() {
  const pdfUrl = './assets/nikhilsresume.pdf'; // Replace with the URL or path to your PDF

  // Open PDF in a new tab
  window.open(pdfUrl, '_blank');

  // Create an anchor element to trigger download
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'nikhilsresume.pdf'; // Name the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
