function addCertificate(button) {
  const certName = prompt("Masukkan nama/judul sertifikasi baru:");
  if (certName && certName.trim() !== "") {
    const certHeader = button.closest('.cert-header');
    const statusSpan = certHeader.querySelector('.cert-status');
    
    if (statusSpan.innerText === "Belum Tersedia") {
      statusSpan.innerText = certName;
    } else {
      statusSpan.innerText += ", " + certName;
    }
  }
}