// 1. Ambil data dari localStorage saat pertama kali dimuat, jika belum ada buat objek kosong
let memberCertificates = JSON.parse(localStorage.getItem('savedCertificates')) || {
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
  
  // Pastikan key anggota ada di dalam objek memberCertificates
  if (!memberCertificates[currentActiveMemberKey]) {
    memberCertificates[currentActiveMemberKey] = [];
  }

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
      <div class="cert-item-card" style="display:flex; align-items:center; gap:12px; margin-bottom:10px; padding:8px; border:1px solid #e2e8f0; border-radius:8px;">
        <img src="${cert.image}" alt="Sertifikat" style="width:60px; height:60px; object-fit:cover; border-radius:4px;" onerror="this.src='https://ui-avatars.com/api/?name=Cert&background=306998&color=fff'">
        <div class="cert-item-info">
          <strong style="display:block; color:#1e293b;">${cert.title}</strong>
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
          // Tambahkan sertifikat baru ke array anggota
          memberCertificates[currentActiveMemberKey].push({
            title: title,
            image: event.target.result
          });
          
          // 2. SIMPAN KE LOCALSTORAGE (Penyimpanan Permanen Browser)
          localStorage.setItem('savedCertificates', JSON.stringify(memberCertificates));
          
          renderCertificates();
          certForm.reset();
          alert('Sertifikat berhasil diunggah dan tersimpan!');
        };
        reader.readAsDataURL(file);
      }
    });
  }
});