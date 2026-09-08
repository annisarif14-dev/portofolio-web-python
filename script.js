let memberCertificates = {
  annisa: [],
  vika: [],
  zahra: [],
  anik: [],
  syauqi: [],
  syahan: [],
  radhia: []
};

let currentActiveMemberKey = '';

function openMemberModal(memberKey, name, role, imgSrc, desc) {
  currentActiveMemberKey = memberKey;
  
  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalRole').textContent = role;
  document.getElementById('modalMemberImg').src = imgSrc;
  document.getElementById('modalDesc').textContent = desc;
  
  renderCertificates();
  
  document.getElementById('certModal').style.display = 'block';
}

function renderCertificates() {
  const certListContainer = document.getElementById('memberCertList');
  const certs = memberCertificates[currentActiveMemberKey] || [];
  
  if (certs.length === 0) {
    certListContainer.innerHTML = `<p class="no-cert-text">Belum ada sertifikat yang diunggah untuk anggota ini.</p>`;
    return;
  }
  
  let html = '';
  certs.forEach((cert, index) => {
    html += `
      <div class="cert-item-card">
        <img src="${cert.image}" alt="Sertifikat" onerror="this.src='https://ui-avatars.com/api/?name=Cert&background=306998&color=fff'">
        <div class="cert-item-info">
          <span>${cert.title}</span>
          <small style="color: #64748b;">Sertifikat #${index + 1}</small>
        </div>
      </div>
    `;
  });
  
  certListContainer.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('certModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const certForm = document.getElementById('certForm');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  if (certForm) {
    certForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const titleInput = document.getElementById('certTitle');
      const fileInput = document.getElementById('certFile');
      
      const title = titleInput.value.trim();
      const file = fileInput.files[0];
      
      if (file && currentActiveMemberKey) {
        const reader = new FileReader();
        reader.onload = function(event) {
          memberCertificates[currentActiveMemberKey].push({
            title: title,
            image: event.target.result
          });
          
          renderCertificates();
          certForm.reset();
          alert('Sertifikat berhasil diunggah!');
        };
        reader.readAsDataURL(file);
      }
    });
  }
});