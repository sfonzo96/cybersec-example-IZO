window.onload = function () {
  const downloadLink = document.createElement("a");
  downloadLink.href = "https://cybersec-example.netlify.app/download/claseCybersec.pdf";
  downloadLink.download = "";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
