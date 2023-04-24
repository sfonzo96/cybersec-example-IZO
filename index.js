window.onload = function () {
  const downloadLink = document.createElement("a");
  downloadLink.href = "https://cybersec-example.netlify.app/NotAVirus.pdf";
  downloadLink.download = "NotAVirus.pdf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
