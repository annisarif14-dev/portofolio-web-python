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

// 1. RENDER LIST SERTIFIKAT (Ditambah Tombol Lihat, Edit, Hapus)
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
      <div class="cert-item-card" style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:10px; padding:10px; border:1px solid #e2e8f0; border-radius:8px; background:#f8fafc;">
        <div style="display:flex; align-items:center; gap:12px; cursor:pointer;" onclick="viewCertificate(${index})" title="Klik untuk lihat gambar penuh">
          <img src="${cert.image}" alt="Sertifikat" style="width:60px; height:60px; object-fit:cover; border-radius:6px;" onerror="this.src='https://ui-avatars.com/api/?name=Cert&background=306998&color=fff'">
          <div class="cert-item-info">
            <strong style="display:block; color:#1e293b; font-size:15px;">${cert.title}</strong>
            <small style="color: #64748b;">Sertifikat #${index + 1} • <span style="color:#0284c7; text-decoration:underline;">Lihat Gambar</span></small>
          </div>
        </div>
        
        <!-- Tombol Aksi Edit & Hapus -->
        <div class="cert-item-actions" style="display:flex; gap:6px;">
          <button onclick="editCertificate(${index})" style="background:#f59e0b; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer; font-size:12px;">Edit</button>
          <button onclick="deleteCertificate(${index})" style="background:#ef4444; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer; font-size:12px;">Hapus</button>
        </div>
      </div>
    `;
  });
  
  certListContainer.innerHTML = html;
}

// 2. FITUR LIHAT / PREVIEW SERTIFIKAT GAMBAR PENUH
function viewCertificate(index) {
  const cert = memberCertificates[currentActiveMemberKey][index];
  if (cert) {
    const newWindow = window.open("");
    newWindow.document.write(`
      <html>
        <head><title>Preview - ${cert.title}</title></head>
        <body style="margin:0; background:#0f172a; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; font-family:sans-serif; color:white;">
          <h2 style="margin-bottom:15px;">${cert.title}</h2>
          <img src="${cert.image}" style="max-width:90%; max-height:80vh; border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.5);">
        </body>
      </html>
    `);
  }
}

// 3. FITUR EDIT JUDUL SERTIFIKAT
function editCertificate(index) {
  const currentTitle = memberCertificates[currentActiveMemberKey][index].title;
  const newTitle = prompt('Masukkan judul sertifikat baru:', currentTitle);
  
  if (newTitle !== null && newTitle.trim() !== '') {
    memberCertificates[currentActiveMemberKey][index].title = newTitle.trim();
    saveAndReload();
  }
}

// 4. FITUR HAPUS SERTIFIKAT
function deleteCertificate(index) {
  const confirmDelete = confirm('Apakah Anda yakin ingin menghapus sertifikat ini?');
  if (confirmDelete) {
    memberCertificates[currentActiveMemberKey].splice(index, 1);
    saveAndReload();
  }
}

// FUNGSI SIMPAN KE LOCALSTORAGE & RENDER REFRESH
function saveAndReload() {
  localStorage.setItem('savedCertificates', JSON.stringify(memberCertificates));
  renderCertificates();
}

// EVENT LISTENER LOAD & SUBMIT FORM
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
          
          saveAndReload();
          certForm.reset();
          alert('Sertifikat berhasil diunggah!');
        };
        reader.readAsDataURL(file);
      }
    });
  }
});