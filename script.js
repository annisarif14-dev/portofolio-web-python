// DATA 6 SERTIFIKAT MANUAL TIAP ANGGOTA
const memberCertificates = {
  annisa: [
    { title: "Python Developer Certification", image: "img/sertif_annisa_1.png", issuer: "freeCodeCamp", date: "2026" },
    { title: "Memulai Pemrograman dengan Java", image: "img/sertif_annisa_2.png", issuer: "Dicoding", date: "2026" },
    { title: "Programming Concepts DTS", image: "img/sertif_annisa_3.png", issuer: "Komdigi", date: "2026" },
    { title: "Software Architecture Basics", image: "img/sertif_annisa_4.png", issuer: "Internal", date: "2026" },
    { title: "Project Management Essentials", image: "img/sertif_annisa_5.png", issuer: "Coursera", date: "2026" },
    { title: "Web Development Masterclass", image: "img/sertif_annisa_6.png", issuer: "Udemy", date: "2026" }
  ],
  vika: [
    { title: "Frontend Web Fundamentals", image: "img/sertif_vika_1.png", issuer: "Dicoding", date: "2026" },
    { title: "Basic Python Programming", image: "img/sertif_vika_2.png", issuer: "Sololearn", date: "2026" },
    { title: "Responsive Web Design", image: "img/sertif_vika_3.png", issuer: "freeCodeCamp", date: "2026" },
    { title: "JavaScript Essentials", image: "img/sertif_vika_4.png", issuer: "Dicoding", date: "2026" },
    { title: "UI Implementation for Web", image: "img/sertif_vika_5.png", issuer: "Udemy", date: "2026" },
    { title: "Git & Version Control", image: "img/sertif_vika_6.png", issuer: "GitHub", date: "2026" }
  ],
  zahra: [
    { title: "UI/UX Design Masterclass", image: "img/sertif_zahra_1.png", issuer: "Coursera", date: "2026" },
    { title: "Figma UI Design Essentials", image: "img/sertif_zahra_2.png", issuer: "Udemy", date: "2026" },
    { title: "User Research Methods", image: "img/sertif_zahra_3.png", issuer: "Google", date: "2026" },
    { title: "Design Thinking Fundamentals", image: "img/sertif_zahra_4.png", issuer: "Interaction Design", date: "2026" },
    { title: "Mobile App Wireframing", image: "img/sertif_zahra_5.png", issuer: "Coursera", date: "2026" },
    { title: "Prototyping Advanced", image: "img/sertif_zahra_6.png", issuer: "Figma Academy", date: "2026" }
  ],
  anik: [
    { title: "Backend Developer with Python", image: "img/sertif_anik_1.png", issuer: "Udemy", date: "2026" },
    { title: "Database Management Systems", image: "img/sertif_anik_2.png", issuer: "Dicoding", date: "2026" },
    { title: "RESTful API Design", image: "img/sertif_anik_3.png", issuer: "Coursera", date: "2026" },
    { title: "SQL & MySQL Database", image: "img/sertif_anik_4.png", issuer: "Sololearn", date: "2026" },
    { title: "Server Administration Linux", image: "img/sertif_anik_5.png", issuer: "DigitalOcean", date: "2026" },
    { title: "Flask & FastAPI Framework", image: "img/sertif_anik_6.png", issuer: "Udemy", date: "2026" }
  ],
  syauqi: [
    { title: "Python Algorithms & Data Structures", image: "img/sertif_syauqi_1.png", issuer: "HackerRank", date: "2026" },
    { title: "Advanced Python Scripting", image: "img/sertif_syauqi_2.png", issuer: "Coursera", date: "2026" },
    { title: "Problem Solving (Intermediate)", image: "img/sertif_syauqi_3.png", issuer: "HackerRank", date: "2026" },
    { title: "Object-Oriented Programming Python", image: "img/sertif_syauqi_4.png", issuer: "Dicoding", date: "2026" },
    { title: "Automation Scripting Basics", image: "img/sertif_syauqi_5.png", issuer: "Udemy", date: "2026" },
    { title: "Clean Code & Refactoring", image: "img/sertif_syauqi_6.png", issuer: "Coursera", date: "2026" }
  ],
  syahan: [
    { title: "Data Analyst Professional Certificate", image: "img/sertif_syahan_1.png", issuer: "Google", date: "2026" },
    { title: "Python for Data Science", image: "img/sertif_syahan_2.png", issuer: "Kaggle", date: "2026" },
    { title: "Data Visualization with Pandas & Matplotlib", image: "img/sertif_syahan_3.png", issuer: "Coursera", date: "2026" },
    { title: "SQL for Data Analysis", image: "img/sertif_syahan_4.png", issuer: "DataCamp", date: "2026" },
    { title: "Statistical Thinking for Data Science", image: "img/sertif_syahan_5.png", issuer: "Udemy", date: "2026" },
    { title: "Business Intelligence Fundamentals", image: "img/sertif_syahan_6.png", issuer: "Google", date: "2026" }
  ],
  radhia: [
    { title: "Software Testing & QA Fundamentals", image: "img/sertif_radhia_1.png", issuer: "Udemy", date: "2026" },
    { title: "System Analyst Foundations", image: "img/sertif_radhia_2.png", issuer: "Coursera", date: "2026" },
    { title: "UML & System Modeling", image: "img/sertif_radhia_3.png", issuer: "Dicoding", date: "2026" },
    { title: "Manual & Automated Testing", image: "img/sertif_radhia_4.png", issuer: "Coursera", date: "2026" },
    { title: "Requirements Analysis", image: "img/sertif_radhia_5.png", issuer: "Udemy", date: "2026" },
    { title: "Agile Project Management", image: "img/sertif_radhia_6.png", issuer: "Scrum.org", date: "2026" }
  ]
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

// RENDER 6 SERTIFIKAT DALAM BENTUK GRID GALERI
function renderCertificates() {
  const certListContainer = document.getElementById('memberCertList');
  const certs = memberCertificates[currentActiveMemberKey] || [];
  
  if (certs.length === 0) {
    certListContainer.innerHTML = `<p class="no-cert-text">Belum ada sertifikat yang ditampilkan untuk anggota ini.</p>`;
    return;
  }
  
  let html = '<div class="cert-grid-gallery">';
  certs.forEach((cert) => {
    html += `
      <div class="cert-card-item" onclick="viewCertificate('${cert.image}', '${cert.title}')">
        <div class="cert-thumb-wrapper">
          <img src="${cert.image}" alt="${cert.title}" onerror="this.src='https://ui-avatars.com/api/?name=Certificate&background=306998&color=fff&size=300'">
          <div class="cert-overlay-zoom">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
        <div class="cert-card-details">
          <h4>${cert.title}</h4>
          <p><i class="fas fa-building"></i> ${cert.issuer} &bull; <i class="far fa-calendar-alt"></i> ${cert.date}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';
  
  certListContainer.innerHTML = html;
}

// FITUR PREVIEW GAMBAR FULLSCREEN (LIGHTBOX)
function viewCertificate(imgSrc, title) {
  const lightbox = document.createElement('div');
  lightbox.className = 'cert-lightbox-overlay';
  lightbox.innerHTML = `
    <div class="cert-lightbox-container">
      <span class="cert-lightbox-close">&times;</span>
      <h3>${title}</h3>
      <img src="${imgSrc}" alt="${title}" onerror="this.src='https://ui-avatars.com/api/?name=Certificate&background=306998&color=fff'">
    </div>
  `;
  
  document.body.appendChild(lightbox);
  
  lightbox.querySelector('.cert-lightbox-close').addEventListener('click', () => {
    lightbox.remove();
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.remove();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('certModal');
  const closeBtn = document.getElementById('closeModalBtn');

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
});